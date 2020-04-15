const mongoose = require('mongoose');

const equipementSchema = mongoose.Schema({
  nom: { type: String, required: true},
  description: { type: String, required: true},
  type: { type: String, required: true},
  site: { type: String, required: true},
  secteur: { type: String, required: true},
  flux: { type: String, required: true},
  zone: { type: String, required: true}
});


module.exports = mongoose.model('Equipement', equipementSchema);