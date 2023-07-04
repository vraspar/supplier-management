const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  logo: {
    data: Buffer, // Store the image data as binary
    contentType: String // Store the content type of the image

  },
  address: {
    type: String,
    required: true
  }
});

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;
