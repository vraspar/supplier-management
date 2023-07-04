const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

// Enable CORS
app.use(cors());

// Parse incoming JSON data
app.use(express.json());



mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const supplierRoutes = require('./routes/supplierRoutes');




// Use the supplier routes
app.use('/api/suppliers', supplierRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
