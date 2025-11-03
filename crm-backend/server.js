// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const { Employee, Enquiry } = require('./models');
const sequelize = require('./config/database');

// Parse JSON bodies
app.use(express.json());

const employeeRoutes = require('./routes/employeeRoutes');
app.use('/api/employees', employeeRoutes);


const enquiryRoutes = require('./routes/enquiryRoutes');
app.use('/api/enquiries', enquiryRoutes);



// Example root route
app.get('/', (req, res) => {
  res.send('Fastor CRM Backend API is running!');
});

// Sync DB and start server
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Error syncing the database:', err);
});
