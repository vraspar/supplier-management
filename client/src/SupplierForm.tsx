import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Grid, Paper } from '@mui/material';
import axios from 'axios';

const SupplierForm: React.FC = () => {
  const [name, setName] = useState('');
  const [logo, setLogo] = useState<File | null>(null);
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !logo || !address) {
      setError('Please fill in all fields');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('logo', logo);
      formData.append('address', address);

      const response = await axios.post('http://localhost:3000/api/suppliers', formData);
      console.log(response.data); // Handle the response as needed

      // Reset the form
      setName('');
      setLogo(null);
      setAddress('');
    } catch (error) {
      setError('An error occurred while creating the supplier');
    }

    setLoading(false);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
        Create Supplier
      </Typography>
      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>
                Logo Upload
              </Typography>
              {/* Image preview */}
              {logo && (
                <img
                  src={URL.createObjectURL(logo)}
                  alt="Logo Preview"
                  style={{ width: '100%', marginBottom: 8 }}
                />
              )}
              {/* File input */}
              <input
                type="file"
                accept="image/*"
                onChange={e => setLogo(e.target.files && e.target.files[0])}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>
                Supplier Details
              </Typography>
              <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Address"
                value={address}
                onChange={e => setAddress(e.target.value)}
                sx={{ mb: 2 }}
              />
            </Paper>
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" disabled={loading} sx={{ mt: 2 }}>
          Create
        </Button>
      </form>
    </Container>
  );
};

export default SupplierForm;
