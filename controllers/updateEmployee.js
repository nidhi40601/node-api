const dbConn = require('../config');

updateEmployeeController = (req,res) => {
    console.log(req.body);
    const id = req.params.id
    const sql = `UPDATE EMPLOYEES SET Name=?, City=?, Gender=? WHERE ID=?`;
    dbConn.query(sql, [req.body.Name, req.body.City, req.body.Gender, id], (err, result) => {
        if(err) throw err;
        res.statusCode = 200;
        res.send("Employee updated successfully");
    })
}

module.exports = updateEmployeeController