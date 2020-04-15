
const Site = require('../models/Site');

exports.createSite = (req, res, next) => {
    delete req.body._id;
    const site = new Site({
        ...req.body
    });
    site.save()
    .then(() => res.status (201).json({message: 'Nouveau site ajouté !!'}))
    .catch((error) => res.status(400).json({error}));
   };
exports.modifySite = (req, res, next) => {
    Site.updateOne({ _id: req.params.id }, {...req.body, _id: req.params.id})
      .then(site => res.status(200).json({message: 'Site à été modifé'}))
      .catch(error => res.status(404).json({ error }));
  };
exports.deleteSite = (req, res, next) => {
    Site.deleteOne({_id: req.params.id})
    .then(()=> res.status(200).json({message: 'un site à été supprimé'}))
    .catch(error=> res.status(400).json({error}))
};
exports.getSiteById = (req, res, next) => {
    Site.findOne({_id: req.params.id})
    .then(site => res.status(200).json(site))
    .catch(error=> res.status(400).json({error}))
};
exports.getSites = (req, res, next) => {
    Site.find()
    .then(site => res.status(200).json(site))
    .catch(error => res.status(400).json({error}));
};