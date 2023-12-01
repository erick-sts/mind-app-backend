const sequelize = require('sequelize');
const database = require('../db');
const schema = "";

class Cursos extends sequelize.Model { }

Cursos.init(
    {
        id:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nomeCurso:
        {
            type: sequelize.STRING,
            allowNull: false,
        },
        professorResponsavel:
        {
            type: sequelize.STRING,
            allowNull: false,
        },
        categoria:
        {
            type: sequelize.STRING,
            allowNull: false,
        },
        descricao:
        {
            type: sequelize.STRING,
            allowNull: false,
        },
        imagem:
        {
            type: sequelize.BLOB,
            allowNull: true,
        },
    },
    {
        sequelize : database, modelName: 'cursos', schema
    }
)

module.exports = Cursos;