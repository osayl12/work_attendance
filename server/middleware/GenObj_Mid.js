async function QueryExecSimpleReply(Query, values) {
    try {
        let [rows] = await global.db_pool.promise().execute(Query, values);
        return rows;
    } catch (err) {
        console.error("DB Error:", err.message);
        return false;
    }
}

module.exports = { QueryExecSimpleReply };