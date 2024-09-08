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
  Divider,
  TextField
} from '@mui/material';


const FormPage2 = ({ formData, setFormData, handleNext }) => {
  const [errors, setErrors] = useState({});
  
  const validate = () => {
    let tempErrors = {};
  
    if (!formData.diabetes) tempErrors.diabetes = 'Diabetes é obrigatório.';
    if (!formData.problemasCardiacos) tempErrors.problemasCardiacos = 'Problemas cardiacos é obrigatório.';
    if (!formData.pressaoAlta) tempErrors.pressaoAlta = 'Pressao Alta é obrigatório.';
    if (!formData.asma) tempErrors.asma = 'Asma é obrigatório.';
    if (!formData.depressao) tempErrors.depressao = 'Depressao é obrigatório.';
    if (!formData.ansiedade) tempErrors.ansiedade = 'Ansiedade é obrigatório.';
    if (!formData.colesterolAlto) tempErrors.colesterolAlto = 'Colesterol Alto é obrigatório.';
    if (!formData.doresNasCostas) tempErrors.doresNasCostas = 'Dores nas costas é obrigatório.';
    if (!formData.doresDeCabeca) tempErrors.doresDeCabeca = 'Dores de Cabeça é obrigatório.';
    if (!formData.doresNasArticulacoes) tempErrors.doresNasArticulacoes = 'Dores nas articulações é obrigatório.';
    if (!formData.cancer) tempErrors.cancer = 'Câncer é obrigatório.';
    if (!formData.infeccoesSexualmenteTransmissiveis) tempErrors.infeccoesSexualmenteTransmissiveis = 'Infecçõoes Sexualmente Transmissíveis é obrigatório.';
  
    setErrors(tempErrors);
    
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      handleNext();
    } else {
      let camposNaoPreenchidos = [];
  
      if (!formData.diabetes) camposNaoPreenchidos.push('diabetes');
      if (!formData.problemasCardiacos) camposNaoPreenchidos.push('problemasCardiacos');
      if (!formData.pressaoAlta) camposNaoPreenchidos.push('pressaoAlta');
      if (!formData.asma) camposNaoPreenchidos.push('asma');
      if (!formData.ansiedade) camposNaoPreenchidos.push('ansiedade');
      if (!formData.colesterolAlto) camposNaoPreenchidos.push('colesterolAlto');
      if (!formData.doresNasCostas) camposNaoPreenchidos.push('doresNasCostas');
      if (!formData.doresDeCabeca) camposNaoPreenchidos.push('doresDeCabeca');
      if (!formData.cancer) camposNaoPreenchidos.push('cancer');
      if (!formData.infeccoesSexualmenteTransmissiveis) camposNaoPreenchidos.push('infeccoesSexualmenteTransmissiveis');
  
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
                      onChange={() => handleCheckboxChange('diabetes', 'nao tenho')}
                      color='primary'
                    />
                  }
                  label='Não tenho'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.diabetes.includes('nao sei')}
                      onChange={() => handleCheckboxChange('diabetes', 'nao sei')}
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
              <FormControl component='fieldset' error={!!errors.problemasCardiacos}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.problemasCardiacos.includes('tenho')}
                      onChange={() => handleCheckboxChange('problemasCardiacos', 'tenho')}
                      color='primary'
                    />
                  }
                  label='Tenho'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.problemasCardiacos.includes('nao tenho')}
                      onChange={() => handleCheckboxChange('problemasCardiacos', 'nao tenho')}
                      color='primary'
                    />
                  }
                  label='Não tenho'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.problemasCardiacos.includes('ja tive')}
                      onChange={() => handleCheckboxChange('problemasCardiacos', 'ja tive')}
                      color='primary'
                    />
                  }
                  label='Já tive, mas me curei'
                />
                {errors.problemasCardiacos && <FormHelperText>{errors.problemasCardiacos}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant='h6' gutterBottom sx={{ fontWeight: 'bold' }}>
                Pressao Alta
              </Typography>
              <FormControl component='fieldset' error={!!errors.diabetes}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.pressaoAlta.includes('tenho')}
                      onChange={() => handleCheckboxChange('pressaoAlta', 'tenho')}
                      color='primary'
                    />
                  }
                  label='Tenho'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.pressaoAlta.includes('nao tenho')}
                      onChange={() => handleCheckboxChange('pressaoAlta', 'nao tenho')}
                      color='primary'
                    />
                  }
                  label='Não tenho'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.pressaoAlta.includes('nao sei')}
                      onChange={() => handleCheckboxChange('pressaoAlta', 'nao sei')}
                      color='primary'
                    />
                  }
                  label='Não sei'
                />
                {errors.pressaoAlta && <FormHelperText>{errors.pressaoAlta}</FormHelperText>}
              </FormControl>
            </Grid>
          </Grid>

          <Divider sx={{ borderBottomWidth: 1, marginTop: 2, marginBottom: 8 }} />

          <Grid container spacing={2} sx={{ marginTop: 3 }}>
            <Grid item xs={12} sm={4}>
              <Typography variant='h6' gutterBottom sx={{ fontWeight: 'bold' }}>
                Asma
              </Typography>
              <FormControl component='fieldset' error={!!errors.asma}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.asma.includes('tenho')}
                      onChange={() => handleCheckboxChange('asma', 'tenho')}
                      color='primary'
                    />
                  }
                  label='Tenho'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.asma.includes('nao tenho')}
                      onChange={() => handleCheckboxChange('asma', 'nao tenho')}
                      color='primary'
                    />
                  }
                  label='Não tenho'
                />
                {errors.asma && <FormHelperText>{errors.asma}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant='h6' gutterBottom sx={{ fontWeight: 'bold' }}>
                Depressao
              </Typography>
              <FormControl component='fieldset' error={!!errors.depressao}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.depressao.includes('tenho')}
                      onChange={() => handleCheckboxChange('depressao', 'tenho')}
                      color='primary'
                    />
                  }
                  label='Tenho'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.depressao.includes('nao tenho')}
                      onChange={() => handleCheckboxChange('depressao', 'nao tenho')}
                      color='primary'
                    />
                  }
                  label='Não tenho'
                />
                {errors.depressao && <FormHelperText>{errors.depressao}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant='h6' gutterBottom sx={{ fontWeight: 'bold' }}>
                Ansiedade
              </Typography>
              <FormControl component='fieldset' error={!!errors.ansiedade}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.ansiedade.includes('tenho')}
                      onChange={() => handleCheckboxChange('ansiedade', 'tenho')}
                      color='primary'
                    />
                  }
                  label='Tenho'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.ansiedade.includes('nao tenho')}
                      onChange={() => handleCheckboxChange('ansiedade', 'nao tenho')}
                      color='primary'
                    />
                  }
                  label='Não tenho'
                />
                {errors.ansiedade && <FormHelperText>{errors.ansiedade}</FormHelperText>}
              </FormControl>
            </Grid>
          </Grid>

          <Divider sx={{ borderBottomWidth: 1, marginTop: 2, marginBottom: 8 }} />

          <Grid container spacing={2} sx={{ marginTop: 3 }}>
            <Grid item xs={12} sm={4}>
              <Typography variant='h6' gutterBottom sx={{ fontWeight: 'bold' }}>
                Colesterol Alto
              </Typography>
              <FormControl component='fieldset' error={!!errors.asma}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.colesterolAlto.includes('tenho')}
                      onChange={() => handleCheckboxChange('colesterolAlto', 'tenho')}
                      color='primary'
                    />
                  }
                  label='Tenho'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.colesterolAlto.includes('nao tenho')}
                      onChange={() => handleCheckboxChange('colesterolAlto', 'nao tenho')}
                      color='primary'
                    />
                  }
                  label='Não tenho'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.colesterolAlto.includes('nao sei')}
                      onChange={() => handleCheckboxChange('colesterolAlto', 'nao sei')}
                      color='primary'
                    />
                  }
                  label='Não sei'
                />
                {errors.colesterolAlto && <FormHelperText>{errors.colesterolAlto}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant='h6' gutterBottom sx={{ fontWeight: 'bold' }}>
                Dores nas Costas
              </Typography>
              <FormControl component='fieldset' error={!!errors.doresNasCostas}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.doresNasCostas.includes('tenho')}
                      onChange={() => handleCheckboxChange('doresNasCostas', 'tenho')}
                      color='primary'
                    />
                  }
                  label='Tenho'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.doresNasCostas.includes('nao tenho')}
                      onChange={() => handleCheckboxChange('doresNasCostas', 'nao tenho')}
                      color='primary'
                    />
                  }
                  label='Não tenho'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.doresNasCostas.includes('ja tive')}
                      onChange={() => handleCheckboxChange('doresNasCostas', 'ja tive')}
                      color='primary'
                    />
                  }
                  label='Já tive, mas me curei'
                />
                {errors.doresNasCostas && <FormHelperText>{errors.doresNasCostas}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant='h6' gutterBottom sx={{ fontWeight: 'bold' }}>
                Dores nas Articulações
              </Typography>
              <FormControl component='fieldset' error={!!errors.doresNasArticulacoes}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.doresNasArticulacoes.includes('tenho')}
                      onChange={() => handleCheckboxChange('doresNasArticulacoes', 'tenho')}
                      color='primary'
                    />
                  }
                  label='Tenho'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.doresNasArticulacoes.includes('nao tenho')}
                      onChange={() => handleCheckboxChange('doresNasArticulacoes', 'nao tenho')}
                      color='primary'
                    />
                  }
                  label='Não tenho'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.doresNasArticulacoes.includes('ja tive')}
                      onChange={() => handleCheckboxChange('doresNasArticulacoes', 'ja tive')}
                      color='primary'
                    />
                  }
                  label='Já tive, mas me curei'
                />
                {errors.doresNasArticulacoes && <FormHelperText>{errors.doresNasArticulacoes}</FormHelperText>}
              </FormControl>
            </Grid>
          </Grid>

          <Divider sx={{ borderBottomWidth: 1, marginTop: 2, marginBottom: 8 }} />

          <Grid container spacing={2} sx={{ marginTop: 3 }}>
            <Grid item xs={12} sm={4}>
              <Typography variant='h6' gutterBottom sx={{ fontWeight: 'bold' }}>
                Dores de Cabeça
              </Typography>
              <FormControl component='fieldset' error={!!errors.doresDeCabeca}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.doresDeCabeca.includes('tenho')}
                      onChange={() => handleCheckboxChange('doresDeCabeca', 'tenho')}
                      color='primary'
                    />
                  }
                  label='Tenho'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.doresDeCabeca.includes('nao tenho')}
                      onChange={() => handleCheckboxChange('doresDeCabeca', 'nao tenho')}
                      color='primary'
                    />
                  }
                  label='Não tenho'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.doresDeCabeca.includes('ja tive')}
                      onChange={() => handleCheckboxChange('doresDeCabeca', 'ja tive')}
                      color='primary'
                    />
                  }
                  label='Já tive, mas me curei'
                />
                {errors.doresDeCabeca && <FormHelperText>{errors.doresDeCabeca}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant='h6' gutterBottom sx={{ fontWeight: 'bold' }}>
                Câncer
              </Typography>
              <FormControl component='fieldset' error={!!errors.doresNasCostas}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.cancer.includes('tenho')}
                      onChange={() => handleCheckboxChange('cancer', 'tenho')}
                      color='primary'
                    />
                  }
                  label='Tenho'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.cancer.includes('nao tenho')}
                      onChange={() => handleCheckboxChange('cancer', 'nao tenho')}
                      color='primary'
                    />
                  }
                  label='Não tenho'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.cancer.includes('ja tive')}
                      onChange={() => handleCheckboxChange('cancer', 'ja tive')}
                      color='primary'
                    />
                  }
                  label='Já tive, mas me curei'
                />
                {errors.cancer && <FormHelperText>{errors.cancer}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant='h6' gutterBottom sx={{ fontWeight: 'bold' }}>
                Infecções Sexualmente Transmissíveis
              </Typography>
              <FormControl component='fieldset' error={!!errors.infeccoesSexualmenteTransmissiveis}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.infeccoesSexualmenteTransmissiveis.includes('tenho')}
                      onChange={() => handleCheckboxChange('infeccoesSexualmenteTransmissiveis', 'tenho')}
                      color='primary'
                    />
                  }
                  label='Tenho'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.infeccoesSexualmenteTransmissiveis.includes('nao tenho')}
                      onChange={() => handleCheckboxChange('infeccoesSexualmenteTransmissiveis', 'nao tenho')}
                      color='primary'
                    />
                  }
                  label='Não tenho'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.infeccoesSexualmenteTransmissiveis.includes('ja tive')}
                      onChange={() => handleCheckboxChange('infeccoesSexualmenteTransmissiveis', 'ja tive')}
                      color='primary'
                    />
                  }
                  label='Já tive, mas me curei'
                />
                {errors.infeccoesSexualmenteTransmissiveis && <FormHelperText>{errors.infeccoesSexualmenteTransmissiveis}</FormHelperText>}
              </FormControl>
            </Grid>
          </Grid>

          <TextField sx={{ marginTop: 8, marginBottom: 4 }} 
            label='Outros'
            fullWidth
            margin='normal'
            value={formData.outros}
            onChange={(e) => setFormData({ ...formData, outros: e.target.value })}
          />

        </CardContent>
      </Card>

      <button id='submitPage2' onClick={handleSubmit} style={{ display: 'none' }}>Submit</button>
    </Box>
  );
};

export default FormPage2;
