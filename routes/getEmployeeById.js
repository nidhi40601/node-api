const express = require('express');
const getEmployeeById = require('../controllers/getEmployeeById');

const router = express.Router();

router.get('/employees/:id',getEmployeeById );

module.exports = router;