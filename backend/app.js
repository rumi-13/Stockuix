const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const holdingRoutes = require('./src/routes/holding.routes');
const positionRoutes = require('./src/routes/position.routes');
const orderRoutes = require('./src/routes/order.routes');
const authRoutes = require('./src/routes/auth.routes');
const app = express();
// Trust the first proxy (Render) so Express can detect HTTPS for secure cookies
app.set('trust proxy', 1);

const FRONTEND_URL = process.env.FRONTEND_URL ||
	(process.env.NODE_ENV === 'production' ? 'https://feasty-z82k.onrender.com' : 'http://localhost:5173');

app.use(cors({
		origin: FRONTEND_URL,
		credentials: true,
		methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
		allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use('/api/holding', holdingRoutes);
app.use('/api/position', positionRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/auth', authRoutes);
module.exports = app;