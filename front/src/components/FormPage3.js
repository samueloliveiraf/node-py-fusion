import React, { useEffect, useState } from 'react';
import { TextField, Box, Typography, MenuItem, Checkbox, FormControlLabel, Alert } from '@mui/material';
import axios from 'axios';


const FormPage3 = ({ formData, setFormData, setIsAlimentoSelected }) => {
  const [alimentacaoData, setAlimentacaoData] = useState([]);
  const [tipoAlimentacao, setTipoAlimentacao] = useState('');
  const [alimentosDiarios, setAlimentosDiarios] = useState([]);
  const [selectedAlimentos, setSelectedAlimentos] = useState({});
  const [error] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/getAlimentacao')
      .then(response => {
        const formattedData = Object.entries(response.data).map(([tipo, alimentos]) => ({
          tipo,
          alimentos
        }));
        setAlimentacaoData(formattedData);
      })
      .catch(error => {
        console.error("Erro ao carregar dados de alimentação", error);
      });
  }, []);

  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [tipoAlimentacao]: selectedAlimentos[tipoAlimentacao] || []
    }));
    
    // Verifica se pelo menos um alimento foi selecionado
    const hasSelectedAlimentos = Object.values(selectedAlimentos).some(alimentos => alimentos.length > 0);
    setIsAlimentoSelected(hasSelectedAlimentos);

  }, [selectedAlimentos, tipoAlimentacao, setFormData, setIsAlimentoSelected]);

  const handleTipoAlimentacaoChange = (event) => {
    const tipoSelecionado = event.target.value;
    setTipoAlimentacao(tipoSelecionado);

    const alimentos = alimentacaoData.find(item => item.tipo === tipoSelecionado)?.alimentos || [];
    setAlimentosDiarios(alimentos);
    setSelectedAlimentos(prevSelected => ({
      ...prevSelected,
      [tipoSelecionado]: prevSelected[tipoSelecionado] || []
    }));
  };

  const handleAlimentoCheck = (event) => {
    const alimento = event.target.name;
    const tipo = tipoAlimentacao;

    setSelectedAlimentos(prevSelected => ({
      ...prevSelected,
      [tipo]: event.target.checked
        ? [...(prevSelected[tipo] || []), alimento]
        : (prevSelected[tipo] || []).filter(item => item !== alimento)
    }));
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Página 3 - Feedback</Typography>

      <TextField
        select
        label="Selecione seu tipo de alimentação"
        value={tipoAlimentacao}
        onChange={handleTipoAlimentacaoChange}
        fullWidth
        margin="normal"
      >
        {alimentacaoData.map((item) => (
          <MenuItem key={item.tipo} value={item.tipo}>
            {item.tipo}
          </MenuItem>
        ))}
      </TextField>

      {alimentosDiarios.length > 0 && (
        <Box
          display="flex"
          flexDirection="column"
          margin="normal"
        >
          <Typography variant="subtitle1" gutterBottom>Selecione seus alimentos</Typography>
          {alimentosDiarios.map((alimento) => (
            <FormControlLabel
              key={alimento}
              control={
                <Checkbox
                  checked={selectedAlimentos[tipoAlimentacao]?.includes(alimento) || false}
                  onChange={handleAlimentoCheck}
                  name={alimento}
                />
              }
              label={alimento}
            />
          ))}
        </Box>
      )}

      {error && <Alert severity="error">{error}</Alert>}
    </Box>
  );
};

export default FormPage3;
