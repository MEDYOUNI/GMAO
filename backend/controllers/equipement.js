
const Equipement = require('../models/Equipement');

exports.createEquipement = (req, res, next) => {
    delete req.body._id;
    const equipement = new Equipement({
        ...req.body
    });
    equipement.save()
    .then(() => res.status (201).json({message: 'Nouveau équipement ajouté !!'}))
    .catch((error) => res.status(400).json({error}));
   };
exports.modifyEquipement = (req, res, next) => {
    Equipement.updateOne({ _id: req.params.id }, {...req.body, _id: req.params.id})
      .then(equipement => res.status(200).json({message: 'Objet à été modifé'}))
      .catch(error => res.status(404).json({ error }));
  };
exports.deleteEquipement = (req, res, next) => {
    Equipement.deleteOne({_id: req.params.id})
    .then(()=> res.status(200).json({message: 'l objet à été suprimé'}))
    .catch(error=> res.status(400).json({error}))
};
exports.getEquipementById = (req, res, next) => {
    Equipement.findOne({_id: req.params.id})
    .then(equipement => res.status(200).json(equipement))
    .catch(error=> res.status(400).json({error}))
};
exports.getEquipements = (req, res, next) => {
    Equipement.find()
    .then(equipement => res.status(200).json(equipement))
    .catch(error => res.status(400).json({error}));
};