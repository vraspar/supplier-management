const express = require('express');
const router = express.Router();
const multer = require('multer');
const Supplier = require('../models/supplier'); 

// Create a Multer storage configuration
const storage = multer.memoryStorage(); // Store the uploaded file in memory as a buffer

// Create a Multer instance with the storage configuration
const upload = multer({ storage });

// Define the route for creating a new supplier
router.post('/',upload.single('logo'), async (req, res) => {
  try {
    const { name, address } = req.body;

    const newSupplier = new Supplier({
      name,
      address,
      logo: {
        data: req.file.buffer,
        contentType: req.file.mimetype
      }
    });

    // Save the new supplier to the database
    const savedSupplier = await newSupplier.save();

    // Send the saved supplier as the response
    res.json(savedSupplier);
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ error: 'An error occurred while creating the supplier' });
  }
});

module.exports = router;
