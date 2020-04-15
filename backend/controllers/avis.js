const Avis = require('../models/Avis');

exports.createAvis = (req, res, next) => {
    delete req.body._id;
    const avis = new Avis({
        ...req.body
    });
    console.log(avis);
    avis.save()
    .then(() => res.status (201).json({message: 'Nouveau avis ajouté !!'}))
    .catch((error) => res.status(400).json({error}));
   };
exports.modifyAvis = (req, res, next) => {
    Avis.updateOne({ _id: req.params.id }, {...req.body, _id: req.params.id})
      .then(() => res.status(200).json({message: 'Avis à été modifé'}))
      .catch(error => res.status(404).json({ error }));
  };
exports.deleteAvis = (req, res, next) => {
    Avis.deleteOne({_id: req.params.id})
    .then(() => res.status(200).json({message: 'l avis à été suprimé'}))
    .catch(error => res.status(400).json({error}))
};
exports.getAvisById = (req, res, next) => {
    Avis.findOne({_id: req.params.id})
    .then(thing => res.status(200).json(thing))
    .catch(error=> res.status(400).json({error}))
};
exports.getAvis = (req, res, next) => {
    Avis.find()
    .then(avis => res.status(200).json(avis))
    .catch(error => res.status(400).json({error}));
};