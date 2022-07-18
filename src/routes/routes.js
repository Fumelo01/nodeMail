const express = require('express');
const router = express.Router();
const control =require('../controllers/control');

router.get('/', control.ample);




module.exports = router