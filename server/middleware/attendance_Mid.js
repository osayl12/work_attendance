let tableName = "attendance";

async function CheckIn(req, res, next) {
  let id_number = req.body.id_number || "";

  res.ok = false;
  res.err = "";

  if (id_number === "") {
    res.err = "wrong parameters";
    return next();
  }

  // בדיקה שהעובד קיים
  let checkQuery = `SELECT id FROM employees WHERE id_number = ?`;
  let checkValues = [id_number];
  let empRows = await GenObj_Mid.QueryExecSimpleReply(checkQuery, checkValues);

  if (empRows === false) {
    res.err = "חלה תקלה, נא לנסות שנית";
    return res.status(500).json({ status: "ERROR", err: res.err });
  }
  if (empRows.length === 0) {
    res.err = "עובד לא נמצא במערכת";
    return next();
  }

  // בדיקה שאין כניסה פתוחה
  let openQuery = `SELECT id FROM ${tableName} WHERE employee_id_number = ? AND check_out IS NULL`;
  let openValues = [id_number];
  let openRows = await GenObj_Mid.QueryExecSimpleReply(openQuery, openValues);

  if (openRows === false) {
    res.err = "חלה תקלה, נא לנסות שנית";
    return res.status(500).json({ status: "ERROR", err: res.err });
  }
  if (openRows.length > 0) {
    res.err = "כבר רשומה כניסה פתוחה לעובד זה";
    return next();
  }

  const Query = `INSERT INTO ${tableName} (employee_id_number, check_in) VALUES (?, NOW())`;
  const values = [id_number];
  let rows = await GenObj_Mid.QueryExecSimpleReply(Query, values);

  if (rows === false) {
    res.err = "חלה תקלה, נא לנסות שנית";
    return res.status(500).json({ status: "ERROR", err: res.err });
  }

  res.ok = true;
  res.insertId = rows.insertId;
  next();
}

async function CheckOut(req, res, next) {
  let id_number = req.body.id_number || "";

  res.ok = false;
  res.err = "";

  if (id_number === "") {
    res.err = "wrong parameters";
    return next();
  }

  const Query = `UPDATE ${tableName} SET check_out = NOW() `;
  const Query2 =
    Query +
    ` WHERE employee_id_number = ? AND check_out IS NULL ORDER BY check_in DESC LIMIT 1`;
  const values = [id_number];
  let rows = await GenObj_Mid.QueryExecSimpleReply(Query2, values);

  if (rows === false) {
    res.err = "חלה תקלה, נא לנסות שנית";
    return res.status(500).json({ status: "ERROR", err: res.err });
  }
  if (rows.affectedRows === 0) {
    res.err = "לא נמצאה כניסה פתוחה לעובד זה";
    return next();
  }

  res.ok = true;
  next();
}

async function GetReport(req, res, next) {
  let id_number = req.params.id_number || "";
  let year = req.params.year || -1;
  let month = req.params.month || -1;

  res.ok = false;
  res.err = "";

  if (id_number === "" || year < 0 || month < 0) {
    res.err = "wrong parameters";
    return next();
  }

  let Query = `SELECT a.*, e.name as employee_name `;
  Query += `FROM ${tableName} a `;
  Query += `JOIN employees e ON e.id_number = a.employee_id_number `;
  Query += `WHERE a.employee_id_number = ? `;
  Query += `AND YEAR(a.check_in) = ? `;
  Query += `AND MONTH(a.check_in) = ? `;
  Query += `ORDER BY a.check_in ASC `;

  let values = [id_number, year, month];
  let rows = await GenObj_Mid.QueryExecSimpleReply(Query, values);

  if (rows === false) {
    res.err = "חלה תקלה, נא לנסות שנית";
    return res.status(500).json({ status: "ERROR", err: res.err });
  }

  res.ok = true;
  req.ItemsData = { list: rows };
  next();
}

module.exports = { CheckIn, CheckOut, GetReport };
