
const Secteur = require('../models/Secteur');

exports.createSecteur = (req, res, next) => {
    delete req.body._id;
    const secteur = new Secteur({
        ...req.body
    });
    secteur.save()
    .then(() => res.status (201).json({message: 'Nouveau secteur ajouté !!'}))
    .catch((error) => res.status(400).json({error}));
   };
exports.modifySecteur = (req, res, next) => {
    Secteur.updateOne({ _id: req.params.id }, {...req.body, _id: req.params.id})
      .then(secteur => res.status(200).json({message: 'Objet à été modifé'}))
      .catch(error => res.status(404).json({ error }));
  };
exports.deleteSecteur = (req, res, next) => {
    Secteur.deleteOne({_id: req.params.id})
    .then(()=> res.status(200).json({message: 'l objet à été suprimé'}))
    .catch(error=> res.status(400).json({error}))
};
exports.getSecteurById = (req, res, next) => {
    Secteur.findOne({_id: req.params.id})
    .then(secteur => res.status(200).json(secteur))
    .catch(error=> res.status(400).json({error}))
};
exports.getSecteurs = (req, res, next) => {
    Secteur.find()
    .then(secteur => res.status(200).json(secteur))
    .catch(error => res.status(400).json({error}));
};