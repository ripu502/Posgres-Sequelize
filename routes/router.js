const router = require('express').Router();
const controller = require('../controller/function');

router.get('/', controller.test);


router.use('/', controller.error);

module.exports = router;