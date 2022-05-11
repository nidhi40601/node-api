const sql = require('mysql');

const dbConn = sql.createConnection ({
    host : "localhost",
    user: "root",
    password: "",
    database: "employee_data"
});

dbConn.connect( (err) => {
    if(err) throw err;
    console.log('Database connected successfully');
})

module.exports = dbConn;
