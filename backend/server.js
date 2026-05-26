const app = require('./app');
const connectDB = require('./src/db/db');
const holdingModel = require('./src/models/holding.model');
const positionModel = require('./src/models/postition.model');
const PORT = process.env.PORT || 8000;


connectDB();
app.listen(PORT, () =>  {
  console.log(`Server is running on port ${PORT}`);
});