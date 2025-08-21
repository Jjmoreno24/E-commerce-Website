const express = require('express');
const connectDB = require('./database');
const app = express();

// Middleware
app.use(express.json());

// Conectar a MongoDB
connectDB();

// Rutas
const productoRoutes = require('./routes/productosRoutes');
app.use('/api/productos', productoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));