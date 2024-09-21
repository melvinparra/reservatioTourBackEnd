const express = require('express');
const router = express.Router();
const customerController = require('../Controller/customerController');

// Rutas de Clientes
router.post('/', customerController.createCustomer);
router.get('/', customerController.getCustomers);
// Otras rutas (GET by ID, PUT, DELETE)

module.exports = router;
