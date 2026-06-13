const express = require("express");
const router = express.Router();
module.exports = router;

const attendance_Mid = require("../middleware/attendance_Mid");

router.post("/CheckIn", [attendance_Mid.CheckIn], (req, res) => {
  if (res.ok) res.status(200).json({ message: "OK", insertId: res.insertId });
  else return res.status(400).json({ message: res.err });
});

router.post("/CheckOut", [attendance_Mid.CheckOut], (req, res) => {
  if (res.ok) res.status(200).json({ message: "OK" });
  else return res.status(400).json({ message: res.err });
});

router.get(
  "/Report/:id_number/:year/:month",
  [attendance_Mid.GetReport],
  (req, res) => {
    if (res.ok) res.status(200).json(req.ItemsData);
    else return res.status(400).json({ message: res.err });
  },
);

router.get("/Employees", [attendance_Mid.GetAllEmployees], (req, res) => {
    if (res.ok)
        res.status(200).json(req.ItemsData);
    else
        return res.status(400).json({ message: res.err });
});
