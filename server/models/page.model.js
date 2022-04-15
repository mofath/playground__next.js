const mongoose = require('mongoose');
const pageSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  'gjs-assets': {
    type: String,
    required: true,
  },
  'gjs-components': {
    type: String,
    required: true,
  },
  'gjs-css': {
    type: String,
    // required: true,
  },
  'gjs-html': {
    type: String,
    required: true,
  },
  'gjs-styles': {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Page', pageSchema);
