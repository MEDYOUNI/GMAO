
const Atelier = require('../models/Atelier');

exports.createAtelier = (req, res, next) => {
    delete req.body._id;
    const atelier = new Atelier({
        ...req.body
    });
    atelier.save()
    .then(() => res.status (201).json({message: 'Nouveau équipement ajouté !!'}))
    .catch((error) => res.status(400).json({error}));
   };
exports.modifyAtelier = (req, res, next) => {
    Atelier.updateOne({ _id: req.params.id }, {...req.body, _id: req.params.id})
      .then(atelier => res.status(200).json({message: 'Objet à été modifé'}))
      .catch(error => res.status(404).json({ error }));
  };
exports.deleteAtelier = (req, res, next) => {
    Atelier.deleteOne({_id: req.params.id})
    .then(()=> res.status(200).json({message: 'l objet à été suprimé'}))
    .catch(error=> res.status(400).json({error}))
};
exports.getAteliertById = (req, res, next) => {
    Atelier.findOne({_id: req.params.id})
    .then(atelier => res.status(200).json(atelier))
    .catch(error=> res.status(400).json({error}))
};
exports.getAteliers = (req, res, next) => {
    Atelier.find()
    .then(atelier => res.status(200).json(atelier))
    .catch(error => res.status(400).json({error}));
};