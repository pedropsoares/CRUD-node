const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Tudo = require('../models/Tudo');

const connection = new Sequelize(dbConfig);

Tudo.init(connection);

module.exports = connection;