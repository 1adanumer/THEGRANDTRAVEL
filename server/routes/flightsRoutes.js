const express = require('express');
const { getFlights } = require('../controllers/flightsController');
const router = express.Router();

// Fetch flights based on search criteria
router.get('/search', getFlights);

module.exports = router;