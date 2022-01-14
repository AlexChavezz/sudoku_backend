const { Router } = require('express');
const { getData, addNewRecord } = require('../controllers/data.controller');

const router = Router();

router.get('/', getData);
router.post('/', addNewRecord);

module.exports = router;