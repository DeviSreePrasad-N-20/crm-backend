// models/employee.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Employee = sequelize.define('Employee', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false }, // hashed
}, {
  tableName: 'employees',
  timestamps: false,
});

module.exports = Employee;
