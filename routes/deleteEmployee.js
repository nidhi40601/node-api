const express = require('express');
const deleteEmployeeController = require('../controllers/deleteEmployee');

const router = express.Router();

router.delete('/employees/:id',deleteEmployeeController);

module.exports = router;