const express = require('express');
const getEmployeeController = require('../controllers/getEmployees');

const router = express.Router();

router.get('/employees',getEmployeeController );

module.exports = router;