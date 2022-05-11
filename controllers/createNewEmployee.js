const dbConn = require('../config');

createNewEmployeeController = (req,res) => {
    const newEmployee = req.body;
    const sql = `INSERT INTO EMPLOYEES SET ?`;
    dbConn.query(sql, req.body, (err, result) => {
        if(err) throw err;
        res.statusCode = 200;
        res.send("Employee added successfully");
    })
}

module.exports = createNewEmployeeController;