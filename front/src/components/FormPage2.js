import React, { useState } from 'react';
import {
  Box, 
  Typography, 
  FormControl, 
  FormHelperText, 
  FormControlLabel, 
  Checkbox,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Divider
} from '@mui/material';

const FormPage2 = ({ formData, setFormData, handleNext }) => {
  const [errors, setErrors] = useState({});
  
  const validate = () => {
    let tempErrors = {};
  
    if (!formData.diabetes) tempErrors.diabetes = 'Diabetes é obrigatório.';
  
    setErrors(tempErrors);
    
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      handleNext();
    } else {
      let camposNaoPreenchidos = [];
  
      if (!formData.diabetes) camposNaoPreenchidos.push('diabetes');
  
      alert(`Verifique informações do formulário: ${camposNaoPreenchidos.join(', ')}.`);
    }
  };

  const handleCheckboxChange = (fieldName, value) => {
    setFormData(prevFormData => {
      const updatedField = prevFormData[fieldName].includes(value)
        ? prevFormData[fieldName].filter(item => item !== value)
        : [...prevFormData[fieldName], value];
  
      return {
        ...prevFormData,
        [fieldName]: updatedField,
      };
    });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Página 2</Typography>

      <Card>
        <CardHeader 
          className='header-card'
          subheader='Preenche apenas as doenças que você tem ou já teve'
        />
        
        <CardContent>
          <Typography variant='h6' gutterBottom>
            (Você pode selecionar mais de um campo em cada resposta)
          </Typography>
          <Grid container spacing={2} sx={{ marginTop: 3 }}>
            <Grid item xs={12} sm={4}>
              <Typography variant='h6' gutterBottom sx={{ fontWeight: 'bold' }}>
                Diabetes
              </Typography>
              <FormControl component='fieldset' error={!!errors.diabetes}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.diabetes.includes('tenho')}
                      onChange={() => handleCheckboxChange('diabetes', 'tenho')}
                      color='primary'
                    />
                  }
                  label='Tenho'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.diabetes.includes('nao tenho')}
                      onChange={() => handleCheckboxChange('diabetes','nao tenho')}
                      color='primary'
                    />
                  }
                  label='Não tenho'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.diabetes.includes('nao sei')}
                      onChange={() => handleCheckboxChange('diabetes','nao sei')}
                      color='primary'
                    />
                  }
                  label='Não sei'
                />
                {errors.diabetes && <FormHelperText>{errors.diabetes}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant='h6' gutterBottom sx={{ fontWeight: 'bold' }}>
                Problemas Cardíacos
              </Typography>
             
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant='h6' gutterBottom sx={{ fontWeight: 'bold' }}>
                Pressao Alta
              </Typography>
                
            </Grid>
          </Grid>
          <Divider sx={{ borderBottomWidth: 1, marginTop: 2, marginBottom: 8 }} />
         
        </CardContent>
        </Card>

      <button id='submitPage2' onClick={handleSubmit} style={{ display: 'none' }}>Submit</button>
    </Box>
  );
};

export default FormPage2;
