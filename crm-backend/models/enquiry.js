// models/enquiry.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Enquiry = sequelize.define('Enquiry', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  courseInterest: { type: DataTypes.STRING, allowNull: false },
  claimed: { type: DataTypes.BOOLEAN, defaultValue: false },
  counselorId: { type: DataTypes.INTEGER, allowNull: true },
}, {
  tableName: 'enquiries',
  timestamps: false,
});

module.exports = Enquiry;
