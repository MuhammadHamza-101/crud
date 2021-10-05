const express = require('express');
const bodyParser = require('body-parser');
var router = express();
const update = require('../controller/emp');
const addData = require('../controller/emp');
const getData = require('../controller/emp');
const remove = require('../controller/emp');


//creates routes..

router.use(bodyParser.json());
router.post('/add', addData.create);
router.get('/get', getData.view);
router.patch('/:id',update.update);
router.delete('/Delete/:id',remove.remove);


module.exports = router;