const express = require('express');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customerRoutes'); 
const tourRoute = require('./routes/tourRoutes'); 

const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/customers', customerRoutes);
app.use('/tours', tourRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
