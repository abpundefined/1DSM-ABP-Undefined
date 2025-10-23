
const dotenv = require("dotenv");
const { Sequelize } = require('sequelize');

dotenv.config();

const sequelize = new Sequelize(
  process.env.BDNOME,
  process.env.BDUSUARIO,
  process.env.BDSENHA,
  {
    host: process.env.BDHOST,
    port: process.env.BDPORTA,
    dialect: 'postgres',
    logging: false 
  }
);

module.exports = { sequelize };

// EXEMPLO PRO .ENV
// PORTA = 3030
// BDUSUARIO = postgres
// BDHOST = localhost
// BDNOME = bdabp
// BDSENHA = 321
// BDPORTA = 5432
