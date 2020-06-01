const express = require('express');
const router = express.Router();
const MainController = require('../controllers/main.controller');

/* GET home page. */
router.get('/', MainController.greeting);

module.exports = router;
