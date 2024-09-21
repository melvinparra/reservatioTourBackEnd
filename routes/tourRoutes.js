const express = require('express');
const router = express.Router();
const tourController = require('../Controller/tourController');

// Rutas de tours
router.post('/', tourController.createTour);
router.get('/', tourController.getTours);
// Otras rutas (GET by ID, PUT, DELETE)

module.exports = router;
