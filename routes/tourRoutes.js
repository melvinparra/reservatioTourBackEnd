const express = require('express');
const router = express.Router();
const tourController = require('../Controller/tourController');

// Rutas de tours
router.post('/', tourController.createTour);
router.get('/', tourController.getTours);
router.put('/:id', tourController.updateTour);


module.exports = router;
