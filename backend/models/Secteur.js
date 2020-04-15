const mongoose = require('mongoose');

const siteSchema = mongoose.Schema({
  nom: { type: String, required: true},
  description: { type: String, required: true},
  etat: { type: String, required: true},
  site: { type: String, required: true}
});

module.exports = mongoose.model('Secteur', siteSchema);