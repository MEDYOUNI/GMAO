const mongoose = require('mongoose');

const siteSchema = mongoose.Schema({
  nom: { type: String, required: true},
  description: { type: String, required: true},
  etat: { type: String}
});


module.exports = mongoose.model('Site', siteSchema);