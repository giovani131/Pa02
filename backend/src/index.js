require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

// Conectar ao MongoDB
connectDB();

// Rotas
app.get('/', (req, res) => {
  res.send('Servidor rodando e banco conectado!');
});


// Inicializar servidor
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}/`)
});
