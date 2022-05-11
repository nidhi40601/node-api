const dbConn = require('../config');

getEmployeeById = (req,res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM EMPLOYEES WHERE ID = ${id}`;
    dbConn.query(sql, (err, result) => {
        if(err) throw err;
        res.statusCode = 200;
        res.send(result);
    })
}

module.exports = getEmployeeById;