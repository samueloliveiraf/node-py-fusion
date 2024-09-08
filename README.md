# Projeto Node com React (Frontend) e Flask (Backend)

Este projeto contém duas aplicações:

- **Frontend**: Aplicação React localizada no diretório `front`.
- **Backend**: API Flask localizada no diretório `backend`.

Ambas as aplicações podem ser executadas utilizando `docker-compose`.

## Requisitos

Certifique-se de que você tem o Docker e o Docker Compose instalados em seu sistema. Se ainda não tiver, siga as instruções em [Docker Docs](https://docs.docker.com/get-docker/) para instalar.

## Como executar

### 1. Frontend (React)

Para executar a aplicação frontend, siga os passos abaixo:

1. Abra um terminal e navegue até o diretório `front`:
   ```bash
   cd front
   docker-compose up
   docker-compose run react-app npm install

### 2. Backend (Flask)

2. Abra um terminal e navegue até o diretório `backend`:
   ```bash
   cd backend
   docker-compose up
