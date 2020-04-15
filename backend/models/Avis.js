const mongoose = require('mongoose');

const avisSchema = mongoose.Schema({
  equipement: { type: String, required: true},
  typeEquipement: { type: String, required: true},
  typeIncident: { type: String, required: true},
  description: { type: String, required: true},
  declarant: { type: String, required: true}
});

module.exports = mongoose.model('Avis', avisSchema);
