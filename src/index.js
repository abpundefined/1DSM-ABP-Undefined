const path = require('path');
const { sequelize } = require('./db/db');
const express = require("express");
const cors = require("cors");
const Publicacao  = require("./routes/publicacao.routes");

const dotenv = require("dotenv");
dotenv.config();

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Tabelas sincronizadas com sucesso!');
  })
  .catch((err) => {
    console.error('Erro ao sincronizar tabelas:', err);
  });

const PORTA = process.env.PORTA || 3000;

const app = express(); 

// Configura o servidor para receber requisições de qualquer domínio
app.use(cors());

// Configura o servidor para suportar JSON
app.use(express.json());

//pasta publica onde as imagens serão salvas
app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(PORTA, () => {
    console.log(`Rodando na porta ${PORTA}...`);
});

//rotas publicas
app.use('/publicacao', Publicacao);

app.use(function(req,res){
    res.json({erro:"Rota desconhecida"});
});