const https = require('https');

const getFlights = (req, res) => {
  const { origin, type } = req.query;

  const options = {
    method: 'GET',
    hostname: 'flights-sky.p.rapidapi.com',
    port: null,
    path: `/flights/search-everywhere?fromEntityId=${origin}&type=${type}`,
    headers: {
      'x-rapidapi-key': process.env.RAPIDAPI_KEY,
      'x-rapidapi-host': 'flights-sky.p.rapidapi.com'
    }
  };

  const apiReq = https.request(options, function (apiRes) {
    const chunks = [];

    apiRes.on('data', function (chunk) {
      chunks.push(chunk);
    });

    apiRes.on('end', function () {
      const body = Buffer.concat(chunks);
      const data = JSON.parse(body.toString());
      res.status(200).json(data);
    });
  });

  apiReq.on('error', function (error) {
    console.error('Error fetching flights:', error);
    res.status(500).json({ message: 'Error fetching flight data', error: error.message });
  });

  apiReq.end();
};

module.exports = { getFlights };