const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const atelierCtrl = require('../controllers/atelier');

router.post('/', atelierCtrl.createAtelier);
router.put('/:id', atelierCtrl.modifyAtelier);
router.delete('/:id', atelierCtrl.deleteAtelier);
router.get('/:id', atelierCtrl.getAteliertById);
router.get('/', atelierCtrl.getAteliers);

module.exports = router;