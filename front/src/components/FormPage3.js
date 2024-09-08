import React from 'react';
import { TextField, Box, Typography } from '@mui/material';

const FormPage3 = ({ formData, setFormData }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>Página 3 - Feedback</Typography>
      <TextField
        label="Feedback"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        value={formData.feedback}
        onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
      />
    </Box>
  );
};

export default FormPage3;
