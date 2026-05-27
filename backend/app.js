const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const holdingRoutes = require('./src/routes/holding.routes');
const positionRoutes = require('./src/routes/position.routes');
const orderRoutes = require('./src/routes/order.routes');
const authRoutes = require('./src/routes/auth.routes');
const app = express();

app.use(cors({
	origin: ["http://localhost:5173", "http://localhost:5174"],
	credentials: true,
}));
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use('/api/holding', holdingRoutes);
app.use('/api/position', positionRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/auth', authRoutes);
module.exports = app;