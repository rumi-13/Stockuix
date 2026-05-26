const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const holdingRoutes = require('./src/routes/holding.routes');
const positionRoutes = require('./src/routes/position.routes');
const orderRoutes = require('./src/routes/order.routes');
const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/holding', holdingRoutes);
app.use('/api/position', positionRoutes);
app.use('/api/order', orderRoutes);
module.exports = app;