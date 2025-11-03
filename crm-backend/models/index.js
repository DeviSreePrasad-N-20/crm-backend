// models/index.js
const Employee = require('./employee');
const Enquiry = require('./enquiry');

// One Counselor (Employee) can claim many Enquiries
Employee.hasMany(Enquiry, { foreignKey: 'counselorId' });
Enquiry.belongsTo(Employee, { foreignKey: 'counselorId' });

module.exports = { Employee, Enquiry };
