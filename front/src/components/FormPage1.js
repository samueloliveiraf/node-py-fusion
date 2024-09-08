import React, { useState } from 'react';
import { 
  TextField,
  Box, 
  Typography, 
  MenuItem, 
  Select, 
  InputLabel, 
  FormControl, 
  FormHelperText, 
  FormControlLabel, 
  Checkbox,
  Grid,
  Card,
  CardContent,
  CardHeader
} from '@mui/material';

const estados = [
  'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 
  'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 
  'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'
];

const pressaoOptions = [
  '- Nenhum -', 'Menor que 120', 'De 120 a 129', 'De 130 a 139', 'De 140 a 159', 'De 160 a 179', '180 ou maior'
];

const FormPage1 = ({ formData, setFormData, handleNext }) => {
  const [errors, setErrors] = useState({});
  
  const validate = () => {
    let tempErrors = {};
  
    if (!formData.name) tempErrors.name = 'Nome é obrigatório.';
    if (!formData.matriculaCpf) tempErrors.matriculaCpf = 'Matrícula/CPF é obrigatório.';
    if (!formData.cargo) tempErrors.cargo = 'Cargo é obrigatório.';
    if (!formData.cidade) tempErrors.cidade = 'Cidade é obrigatória.';
    if (!formData.estado) tempErrors.estado = 'Estado é obrigatório.';
    if (!formData.telefone) tempErrors.telefone = 'Telefone é obrigatório.';
    if (!formData.email || !formData.email.includes('@')) tempErrors.email = 'Email inválido.';
    if (!formData.peso || isNaN(formData.peso)) tempErrors.peso = 'Peso deve ser um número.';
    if (!formData.altura || isNaN(formData.altura)) tempErrors.altura = 'Altura deve ser um número.';
  
    if (!formData.naoSeiPressao) {
      if (!formData.pressaoSistolica) tempErrors.pressaoSistolica = 'Pressão Sistólica é obrigatória.';
      if (!formData.pressaoDiastolica) tempErrors.pressaoDiastolica = 'Pressão Diastólica é obrigatória.';
    }
  
    if (!formData.optionDadosIniciais) tempErrors.optionDadosIniciais = 'Confirme se os dados estão corretos.';
    if (formData.optionDadosIniciais === 'nao') tempErrors.optionDadosIniciais = 'Você só pode passar para página se a confirmação dos dados for (Sim)';
    if (!formData.optionTitularidade) tempErrors.optionTitularidade = 'Titularidade é obrigatório';
    if (!formData.dataNascimento) tempErrors.dataNascimento = 'Data de nascimento é obrigatória.';
    if (!formData.sexoBiologico) tempErrors.sexoBiologico = 'Sexo biológico é obrigatório.';
  
    setErrors(tempErrors);
    
    return Object.keys(tempErrors).length === 0;
  };
  
  const handleSubmit = () => {
    if (validate()) {
      handleNext();
    } else {
      let camposNaoPreenchidos = [];
  
      if (!formData.name) camposNaoPreenchidos.push('Nome');
      if (!formData.matriculaCpf) camposNaoPreenchidos.push('Matrícula/CPF');
      if (!formData.cargo) camposNaoPreenchidos.push('Cargo');
      if (!formData.cidade) camposNaoPreenchidos.push('Cidade');
      if (!formData.estado) camposNaoPreenchidos.push('Estado');
      if (!formData.telefone) camposNaoPreenchidos.push('Telefone');
      if (!formData.email || !formData.email.includes('@')) camposNaoPreenchidos.push('Email');
      if (!formData.peso || isNaN(formData.peso)) camposNaoPreenchidos.push('Peso');
      if (!formData.altura || isNaN(formData.altura)) camposNaoPreenchidos.push('Altura');
      if (!formData.naoSeiPressao) {
        if (!formData.pressaoSistolica) camposNaoPreenchidos.push('Pressão Sistólica');
        if (!formData.pressaoDiastolica) camposNaoPreenchidos.push('Pressão Diastólica');
      }
      if (!formData.optionDadosIniciais) camposNaoPreenchidos.push('Confirme se os dados acima estão corretos');
      if (!formData.optionTitularidade) camposNaoPreenchidos.push('Informe a titularidade');
      if (!formData.dataNascimento) camposNaoPreenchidos.push('Data de nascimento');
      if (!formData.sexoBiologico) camposNaoPreenchidos.push('Sexo biológico');
  
      alert(`Verifique informações do formulário: ${camposNaoPreenchidos.join(', ')}.`);
    }
  };

  const handleCheckboxChange = (value) => {
    setFormData({ ...formData, optionDadosIniciais: value });
  };

  const handleCheckboxChange2 = (value) => {
    setFormData({ ...formData, optionTitularidade: value });
  };

  const handleSexoChange = (value) => {
    setFormData({ ...formData, sexoBiologico: value });
  };

  return (
    <Box>
      <Typography variant='h6' gutterBottom>Página 1 - Informações Pessoais</Typography>

      <TextField
        label='Nome'
        fullWidth
        margin='normal'
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        error={!!errors.name}
        helperText={errors.name}
      />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label='Matrícula/CPF'
            fullWidth
            margin='normal'
            value={formData.matriculaCpf}
            onChange={(e) => setFormData({ ...formData, matriculaCpf: e.target.value })}
            error={!!errors.matriculaCpf}
            helperText={errors.matriculaCpf}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label='Cargo'
            fullWidth
            margin='normal'
            value={formData.cargo}
            onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
            error={!!errors.cargo}
            helperText={errors.cargo}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label='Cidade'
            fullWidth
            margin='normal'
            value={formData.cidade}
            onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
            error={!!errors.cidade}
            helperText={errors.cidade}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth margin='normal' error={!!errors.estado}>
            <InputLabel>Estado</InputLabel>
            <Select
              value={formData.estado}
              onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
            >
              {estados.map((estado) => (
                <MenuItem key={estado} value={estado}>{estado}</MenuItem>
              ))}
            </Select>
            {errors.estado && <FormHelperText>{errors.estado}</FormHelperText>}
          </FormControl>
        </Grid>
      </Grid>

      <Typography variant='h6' gutterBottom>Os dados acima estão corretos?</Typography>
      
      <FormControl component='fieldset' error={!!errors.optionDadosIniciais}>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.optionDadosIniciais === 'sim'}
              onChange={() => handleCheckboxChange('sim')}
              color='primary'
            />
          }
          label='Sim'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.optionDadosIniciais === 'nao'}
              onChange={() => handleCheckboxChange('nao')}
              color='primary'
            />
          }
          label='Não'
        />
        {errors.optionDadosIniciais && <FormHelperText>{errors.optionDadosIniciais}</FormHelperText>}
      </FormControl>

      <Typography variant='h6' gutterBottom>Titularidade</Typography>
      
      <FormControl component='fieldset' error={!!errors.optionTitularidade}>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.optionTitularidade === 'titular'}
              onChange={() => handleCheckboxChange2('titular')}
              color='primary'
            />
          }
          label='Titular'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.optionTitularidade === 'dependente'}
              onChange={() => handleCheckboxChange2('dependente')}
              color='primary'
            />
          }
          label='Dependente'
        />
        {errors.optionTitularidade && <FormHelperText>{errors.optionTitularidade}</FormHelperText>}
      </FormControl>

      <TextField
        label='Telefone'
        fullWidth
        margin='normal'
        value={formData.telefone}
        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
        error={!!errors.telefone}
        helperText={errors.telefone}
      />

      <TextField
        label='Email'
        fullWidth
        margin='normal'
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        error={!!errors.email}
        helperText={errors.email}
      />

      <TextField
        label='Data de Nascimento'
        fullWidth
        margin='normal'
        type='date'
        value={formData.dataNascimento}
        onChange={(e) => setFormData({ ...formData, dataNascimento: e.target.value })}
        InputLabelProps={{ shrink: true }}
        error={!!errors.dataNascimento}
        helperText={errors.dataNascimento}
      />

      <Typography variant='h6' gutterBottom>Sexo Biológico</Typography>
      
      <FormControl component='fieldset' error={!!errors.sexoBiologico}>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.sexoBiologico === 'masculino'}
              onChange={() => handleSexoChange('masculino')}
              color='primary'
            />
          }
          label='Masculino'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.sexoBiologico === 'feminino'}
              onChange={() => handleSexoChange('feminino')}
              color='primary'
            />
          }
          label='Feminino'
        />
        {errors.sexoBiologico && <FormHelperText>{errors.sexoBiologico}</FormHelperText>}
      </FormControl>

      <TextField
        label='Peso (kg)'
        fullWidth
        margin='normal'
        value={formData.peso}
        onChange={(e) => setFormData({ ...formData, peso: e.target.value })}
        error={!!errors.peso}
        helperText={errors.peso}
        type='number'
      />

      <TextField
        label='Altura (cm)'
        fullWidth
        margin='normal'
        value={formData.altura}
        onChange={(e) => setFormData({ ...formData, altura: e.target.value })}
        error={!!errors.altura}
        helperText={errors.altura}
        type='number'
      />

      <Card>
        <CardHeader 
          className='header-card'
          title='Pressão Arterial'
          subheader='Selecione as medidas ou marque "Não sei a minha pressão arterial".'
        />
        
        <CardContent>
        <Typography variant='h6' gutterBottom>
          A pressão é popularmente medida como 'máxima x mínima'. Exemplos: se a sua 
          pressão costuma ser 12x8, selecione máxima: '120-129' e a mínima de '80-84'.
          Se a sua pressão costuma ser 10x6, selecione máxima: 'menor que 120' e a mínima: 
          'menor que 80'.
        </Typography>
          <FormControl fullWidth margin='normal' error={!!errors.pressaoSistolica}>
            <InputLabel>Pressão Sistólica</InputLabel>
            <Select
              value={formData.pressaoSistolica}
              onChange={(e) => setFormData({ ...formData, pressaoSistolica: e.target.value })}
              disabled={formData.naoSeiPressao}
            >
              {pressaoOptions.map((option) => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
              ))}
            </Select>
            {errors.pressaoSistolica && <FormHelperText>{errors.pressaoSistolica}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth margin='normal' error={!!errors.pressaoDiastolica}>
            <InputLabel>Pressão Diastólica</InputLabel>
            <Select
              value={formData.pressaoDiastolica}
              onChange={(e) => setFormData({ ...formData, pressaoDiastolica: e.target.value })}
              disabled={formData.naoSeiPressao}
            >
              {pressaoOptions.map((option) => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
              ))}
            </Select>
            {errors.pressaoDiastolica && <FormHelperText>{errors.pressaoDiastolica}</FormHelperText>}
          </FormControl>

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.naoSeiPressao}
                onChange={(e) => setFormData({ ...formData, naoSeiPressao: e.target.checked })}
              />
            }
            label='Não sei a minha pressão arterial.'
          />
        </CardContent>
      </Card>


      <button id='submitPage1' onClick={handleSubmit} style={{ display: 'none' }}>Submit</button>
    </Box>
  );
};

export default FormPage1;
