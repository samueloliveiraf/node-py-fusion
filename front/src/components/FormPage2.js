import React from 'react';
import { TextField, Box, Typography } from '@mui/material';

const FormPage2 = ({ formData, setFormData }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>Página 2 - Informações de Contato</Typography>
      <TextField
        label="E-mail"
        fullWidth
        margin="normal"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
    </Box>
  );
};

export default FormPage2;
