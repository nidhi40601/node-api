const express = require('express');
const updateEmployeeController = require('../controllers/updateEmployee');

const router = express.Router();

router.put('/employees/:id',updateEmployeeController);

module.exports = router;