// config/database.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

// Use DATABASE_URL from .env, fallback to 'sqlite:./database.sqlite'
const sequelize = new Sequelize(process.env.DATABASE_URL || 'sqlite:./database.sqlite', {
  logging: false, // Set to true to see SQL logs
});

module.exports = sequelize;
