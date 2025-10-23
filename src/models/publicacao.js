const { DataTypes } = require('sequelize');
const sequelize = require('../db/db').sequelize;

const Publicacao = sequelize.define('publicacao', {
    PublicacaoID:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    PublicacaoImamgem: {
        type: DataTypes.STRING,
        allowNull: true
    },
    PublicacaoTitulo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    PublicacaoLinkExterno: {
        type: DataTypes.STRING,
        allowNull: true
    },
    PublicacaoCitacao: {
        type: DataTypes.STRING,
        allowNull: true
    },
    PublicacaoAno: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    PublicacaoIdioma: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'publicacao',
    timestamps: true,
    paranoid: true
});

module.exports = Publicacao;