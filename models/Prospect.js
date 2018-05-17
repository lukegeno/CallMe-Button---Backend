const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const prospectSchema = new Schema({
  fullName: String,
  company: String,
  email: String,
  phoneNumber: String,
  planType: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Prospect = mongoose.model('Prospect', prospectSchema);
module.exports = Prospect;