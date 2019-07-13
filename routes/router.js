const router = require('express').Router();
const controller = require('../controller/function');

router.get('/test', controller.test);

router.get('/add', controller.add);

router.post('/add', controller.postAdd);

router.use('/', controller.error);

module.exports = router;