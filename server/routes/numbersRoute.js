const express = require('express');
const router = express.Router();

const operation = require('../controllers/numbers.controller');

router.post('/numbers/sum', operation.getASum);
router.post('/numbers/product', operation.getAProduct);
router.post('/numbers/power', operation.getAPower);

module.exports = router;