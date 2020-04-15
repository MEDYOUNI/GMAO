const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const secteurCtrl = require('../controllers/secteur');

router.post('/', secteurCtrl.createSecteur);
router.put('/:id', secteurCtrl.modifySecteur);
router.delete('/:id', secteurCtrl.deleteSecteur);
router.get('/:id', secteurCtrl.getSecteurById);
router.get('/', secteurCtrl.getSecteurs);

module.exports = router;