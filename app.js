const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Bring in routes
const employeeRouter = require('./routes/getEmployees');
const getEmployeeByIdRouter = require('./routes/getEmployeeById');
const createNewEmployeeRouter = require('./routes/createNewEmployee');
const updateNewEmployeeRouter = require('./routes/updateEmployee');
const deleteEmployeeRouter = require('./routes/deleteEmployee');

//Middlewares
app.use('/', employeeRouter);
app.use('/', getEmployeeByIdRouter);
app.use('/', createNewEmployeeRouter);
app.use('/', updateNewEmployeeRouter);
app.use('/', deleteEmployeeRouter);

app.listen(5000, () => console.log('Listening to port 5000'));
