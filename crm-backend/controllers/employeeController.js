// controllers/employeeController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Employee } = require('../models');

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Check if email already exists
    const existing = await Employee.findOne({ where: { email } });
    if (existing) return res.status(400).json({ message: "Email already registered." });

    const hashedPassword = await bcrypt.hash(password, 10);
    const employee = await Employee.create({ name, email, password: hashedPassword });
    res.json({ message: "Employee registered successfully.", employee: { id: employee.id, name, email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const employee = await Employee.findOne({ where: { email } });
    if (!employee) return res.status(401).json({ message: "Invalid credentials." });

    const isMatch = await bcrypt.compare(password, employee.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials." });

    const token = jwt.sign({ id: employee.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, employee: { id: employee.id, name: employee.name, email: employee.email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
