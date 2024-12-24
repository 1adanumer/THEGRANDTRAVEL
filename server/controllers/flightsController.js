const axios = require('axios');

const getFlightDetails = async (req, res) => {
  try {
    const response = await axios.get('http://api.aviationstack.com/v1/flights', {
      params: {
        access_key: process.env.AVIATION_STACK_API_KEY,
        // Add other parameters as needed
      },
    });

    const flights = response.data.data;
    res.json(flights);
  } catch (error) {
    console.error('Error fetching flight details:', error);
    res.status(500).json({ error: 'Failed to fetch flight details' });
  }
};

module.exports = {
  getFlightDetails,
};