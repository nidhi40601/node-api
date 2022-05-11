const dbConn = require('../config');

getEmployees = (req,res) => {
    const sql = 'SELECT * FROM EMPLOYEES';
    dbConn.query(sql, (err, result) => {
        if(err) throw err;
        res.statusCode = 200;
        res.send(result);
    })
}

module.exports = getEmployees;