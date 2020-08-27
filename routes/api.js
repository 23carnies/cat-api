var express = require('express');
var router = express.Router();
const catsCtrl = require('../controllers/api/cats')

router.get('/cats', catsCtrl.index)
router.get('/cats/:id', catsCtrl.show) 
router.post('/cats', catsCtrl.create)
router.put('/cats/:id', catsCtrl.update)
router.delete('/cats', catsCtrl.delete)




module.exports = router;
