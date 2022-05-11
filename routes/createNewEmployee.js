const express = require('express');
const createNewEmployeeController = require('../controllers/createNewEmployee');

const router = express.Router();

router.post('/employees',createNewEmployeeController);

module.exports = router;