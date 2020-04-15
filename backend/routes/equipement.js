const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const equipementCtrl = require('../controllers/equipement');

router.post('/', equipementCtrl.createEquipement);
router.put('/:id', equipementCtrl.modifyEquipement);
router.delete('/:id', equipementCtrl.deleteEquipement);
router.get('/:id', equipementCtrl.getEquipementById);
router.get('/', equipementCtrl.getEquipements);

module.exports = router;