const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const avisCtrl = require('../controllers/avis');

router.post('/', avisCtrl.createAvis);
router.put('/:id', avisCtrl.modifyAvis);
router.delete('/:id', avisCtrl.deleteAvis);
router.get('/:id', avisCtrl.getAvisById);
router.get('/', avisCtrl.getAvis);

module.exports = router;