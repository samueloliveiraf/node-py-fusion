import React, { useState } from 'react';
import { Container, Button, Typography, Box } from '@mui/material';
import FormPage1 from './components/FormPage1';
import FormPage2 from './components/FormPage2';
import FormPage3 from './components/FormPage3';

const App = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    matriculaCpf: '',
    cargo: '',
    cidade: '',
    estado: '',
    telefone: '',
    peso: '',
    altura: '',
    pressaoSistolica: '',
    pressaoDiastolica: '',
    optionDadosIniciais: '',
    optionTitularidade: '',
    naoSeiPressao: ''
  });

  const handleNext = () => setPage((prevPage) => prevPage + 1);
  const handleBack = () => setPage((prevPage) => prevPage - 1);
  const handleSubmit = () => {
    console.log("Dados do formulário:", formData);
  };

  const renderPage = () => {
    switch (page) {
      case 0:
        return <FormPage1 formData={formData} setFormData={setFormData} handleNext={handleNext} />;
      case 1:
        return <FormPage2 formData={formData} setFormData={setFormData} />;
      case 2:
        return <FormPage3 formData={formData} setFormData={setFormData} />;
      default:
        return <FormPage1 formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <Container>
      <Box class="box-page" sx={{ padding: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>Formulário Multi-Página</Typography>
        {renderPage()}
        <Box sx={{ marginTop: 2 }}>
          {page > 0 && (
            <Button variant="outlined" onClick={handleBack} sx={{ marginRight: 2 }}>
              Voltar
            </Button>
          )}
          {page < 2 ? (
            <Button
              variant="contained"
              onClick={page === 0 ? () => document.querySelector('#submitPage1').click() : handleNext}
            >
              Próximo
            </Button>
          ) : (
            <Button variant="contained" color="success" onClick={handleSubmit}>
              Enviar
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default App;
