const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/productos', productRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Backend API is running');
});

module.exports = app;