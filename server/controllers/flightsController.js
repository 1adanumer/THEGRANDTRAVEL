const axios = require('axios');
const Flight = require('../models/Flight');

const getFlightDetails = async (req, res) => {
  try {
    const response = await axios.get('http://api.aviationstack.com/v1/flights', {
      params: {
        access_key: process.env.AVIATION_STACK_API_KEY,
        // Add other parameters as needed
      },
    });

    const flights = response.data.data;

    // Save flight data to MongoDB
    await Flight.insertMany(flights.map(flight => ({
      airline: flight.airline.name,
      flight_number: flight.flight.iata,
      departure_airport: flight.departure.iata,
      arrival_airport: flight.arrival.iata,
      departure_time: flight.departure.scheduled,
      arrival_time: flight.arrival.scheduled,
      status: flight.flight_status,
      // Add other fields as needed
    })));

    res.json(flights);
  } catch (error) {
    console.error('Error fetching flight details:', error);
    res.status(500).json({ error: 'Failed to fetch flight details' });
  }
};

module.exports = {
  getFlightDetails,
};