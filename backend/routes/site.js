const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const siteCtrl = require('../controllers/site');

router.post('/', siteCtrl.createSite);
router.put('/:id', siteCtrl.modifySite);
router.delete('/:id', siteCtrl.deleteSite);
router.get('/:id', siteCtrl.getSiteById);
router.get('/', siteCtrl.getSites);

module.exports = router;