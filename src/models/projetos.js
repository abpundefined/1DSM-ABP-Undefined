const { DataTypes } = require('sequelize');
const sequelize = require('../db/db').sequelize;

const Projetos = sequelize.define('projetos', {

    ProjetosID:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    ProjetosImagem:{
        type: DataTypes.STRING,
        allowNull: true
  
    },
 
    ProjetosTitulo:{
        type: DataTypes.STRING,
        allowNull: true
   
    },

    ProjetosTexto:{
        type: DataTypes.STRING,
        allowNull: true
       
    },

    ProjetosIdioma:{
        type: DataTypes.STRING,
        allowNull: true
        
    }

},{
    tableName: 'publicacao',
    timestamps: true,
    paranoid: true
});


module.exports = Projetos;