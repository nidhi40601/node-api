const dbConn = require('../config');

deleteEmployeeController = (req,res) => {
    const id = req.params.id;
    const sql = `DELETE FROM EMPLOYEES WHERE ID=?`;
    dbConn.query(sql, id, (err, result) => {
        if(err) throw err;
        res.statusCode = 200;
        res.send("Employee deleted successfully");
    })
}

module.exports = deleteEmployeeController;