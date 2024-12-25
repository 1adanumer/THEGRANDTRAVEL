import React, { useState } from 'react';
import axios from 'axios';
import './FlightBookingPage.css';

const FlightBookingsPage = () => {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [filters, setFilters] = useState({
    airline: '',
    departureAirport: '',
    arrivalAirport: '',
    departureDate: '',
    arrivalDate: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const flightsPerPage = 10;

  const fetchFlights = async () => {
    try {
      const response = await axios.get('http://api.aviationstack.com/v1/flights', {
        params: {
          access_key: '0d864873390e3b105267e8b1623ad5ef',
          limit: 100,
        },
      });
      setFlights(response.data.data || []);
      setFilteredFlights(response.data.data || []);
    } catch (error) {
      console.error('Error fetching flights:', error);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filterFlights = () => {
    let filtered = flights;

    if (filters.airline) {
      filtered = filtered.filter((flight) => flight.airline.name.toLowerCase().includes(filters.airline.toLowerCase()));
    }

    if (filters.departureAirport) {
      filtered = filtered.filter((flight) => flight.departure.airport.toLowerCase().includes(filters.departureAirport.toLowerCase()));
    }

    if (filters.arrivalAirport) {
      filtered = filtered.filter((flight) => flight.arrival.airport.toLowerCase().includes(filters.arrivalAirport.toLowerCase()));
    }

    if (filters.departureDate) {
      filtered = filtered.filter((flight) => new Date(flight.departure.scheduled).toDateString() === new Date(filters.departureDate).toDateString());
    }

    if (filters.arrivalDate) {
      filtered = filtered.filter((flight) => new Date(flight.arrival.scheduled).toDateString() === new Date(filters.arrivalDate).toDateString());
    }

    setFilteredFlights(filtered);
    setCurrentPage(1);
  };

  const calculateFlightDuration = (departureTime, arrivalTime) => {
    if (!departureTime || !arrivalTime) return 'N/A';
    const departure = new Date(departureTime);
    const arrival = new Date(arrivalTime);
    const durationMs = arrival - departure;

    const hours = Math.floor(durationMs / (1000 * 60 * 60));
    const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));

    return `${hours}h ${minutes}m`;
  };

  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  const currentFlights = filteredFlights.slice(indexOfFirstFlight, indexOfLastFlight);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flight-page">
      <div className="filter-bar">
        <h3>Filter by:</h3>
        <div>
          <label>Airline:</label>
          <input type="text" name="airline" placeholder="Search Airline" onChange={handleFilterChange} />
        </div>
        <div>
          <label>Departure Airport:</label>
          <input type="text" name="departureAirport" placeholder="Search Departure Airport" onChange={handleFilterChange} />
        </div>
        <div>
          <label>Arrival Airport:</label>
          <input type="text" name="arrivalAirport" placeholder="Search Arrival Airport" onChange={handleFilterChange} />
        </div>
        <div>
          <label>Departure Date:</label>
          <input type="date" name="departureDate" onChange={handleFilterChange} />
        </div>
        <div>
          <label>Arrival Date:</label>
          <input type="date" name="arrivalDate" onChange={handleFilterChange} />
        </div>
        <button className="filter-button" onClick={filterFlights}>Apply Filters</button>
<button className="filter-button" onClick={fetchFlights}>Show Flights</button>
      </div>

      <main className="tickets-section">
        <h1>Available Flights</h1>
        {currentFlights.map((flight) => (
          <div className="ticket-box" key={flight.flight?.iata || flight.flight?.number}>
            <div className="ticket-header">
              <h2>{flight.airline?.name || 'N/A'}</h2>
              <p>Flight Number: {flight.flight?.number || 'N/A'}</p>
              <p>Flight Status: {flight.flight_status || 'N/A'}</p>
            </div>
            <div className="ticket-body">
              <div className="flight-info">
                <p className="flight-route">
                  {flight.departure?.airport || 'N/A'} → {flight.arrival?.airport || 'N/A'}
                </p>
                <p className="flight-time">
                  Departure: {new Date(flight.departure?.scheduled).toLocaleString() || 'N/A'}
                </p>
                <p className="flight-time">
                  Arrival: {new Date(flight.arrival?.scheduled).toLocaleString() || 'N/A'}
                </p>
                <p className="flight-duration">
                  Duration: {calculateFlightDuration(flight.departure?.scheduled, flight.arrival?.scheduled)}
                </p>
                <p className="flight-terminal">Departure Terminal: {flight.departure?.terminal || 'N/A'}</p>
                <p className="flight-terminal">Arrival Terminal: {flight.arrival?.terminal || 'N/A'}</p>
                <p className="flight-gate">Departure Gate: {flight.departure?.gate || 'N/A'}</p>
                <p className="flight-aircraft">Aircraft: {flight.aircraft?.iata || 'N/A'}</p>
                <p className="flight-delay">Delay: {flight.departure?.delay || 0} minutes</p>
              </div>
              <button className="book-now-button">Book Now</button>
            </div>
          </div>
        ))}
        <div className="pagination">
          {Array.from({ length: Math.ceil(filteredFlights.length / flightsPerPage) }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FlightBookingsPage;