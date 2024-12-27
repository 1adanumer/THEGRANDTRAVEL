import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
  const [showFlights, setShowFlights] = useState(false);
  const flightsPerPage = 10;

  const fetchFlights = async () => {
    try {
      const response = await axios.get('https://api.aviationstack.com/v1/flights', {
        params: {
          access_key: '0d864873390e3b105267e8b1623ad5ef',
          limit: 100,
        },
      });
      const flightData = response.data.data || [];
      setFlights(flightData);
      setFilteredFlights(flightData);
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
      filtered = filtered.filter((flight) =>
        flight.airline.name.toLowerCase().includes(filters.airline.toLowerCase())
      );
    }

    if (filters.departureAirport) {
      filtered = filtered.filter((flight) =>
        flight.departure.airport.toLowerCase().includes(filters.departureAirport.toLowerCase())
      );
    }

    if (filters.arrivalAirport) {
      filtered = filtered.filter((flight) =>
        flight.arrival.airport.toLowerCase().includes(filters.arrivalAirport.toLowerCase())
      );
    }

    if (filters.departureDate) {
      filtered = filtered.filter(
        (flight) =>
          new Date(flight.departure.scheduled).toDateString() ===
          new Date(filters.departureDate).toDateString()
      );
    }

    if (filters.arrivalDate) {
      filtered = filtered.filter(
        (flight) =>
          new Date(flight.arrival.scheduled).toDateString() ===
          new Date(filters.arrivalDate).toDateString()
      );
    }

    setFilteredFlights(filtered);
    setCurrentPage(1);
  };

  const handleShowFlights = () => {
    fetchFlights();
    setShowFlights(true);
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
          <input
            type="text"
            name="airline"
            placeholder="Search Airline"
            onChange={handleFilterChange}
          />
        </div>
        <div>
          <label>Departure Airport:</label>
          <input
            type="text"
            name="departureAirport"
            placeholder="Search Departure Airport"
            onChange={handleFilterChange}
          />
        </div>
        <div>
          <label>Arrival Airport:</label>
          <input
            type="text"
            name="arrivalAirport"
            placeholder="Search Arrival Airport"
            onChange={handleFilterChange}
          />
        </div>
        <div>
          <label>Departure Date:</label>
          <input type="date" name="departureDate" onChange={handleFilterChange} />
        </div>
        <div>
          <label>Arrival Date:</label>
          <input type="date" name="arrivalDate" onChange={handleFilterChange} />
        </div>
        <button className="filter-button" onClick={filterFlights}>
          Apply Filters
        </button>
        <button className="filter-button" onClick={handleShowFlights}>
          Show Flights
        </button>
      </div>

      {showFlights && (
        <main className="tickets-section">
          <h1>Available Flights</h1>
          {currentFlights.map((flight) => (
            <FlightCard key={flight.flight?.iata || flight.flight?.number} flight={flight} />
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
      )}
    </div>
  );
};

const FlightCard = ({ flight }) => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const departure = new Date(flight.departure?.scheduled);
      const timeLeft = departure - now;

      if (timeLeft <= 0) return 'Flight Departed';

      const hours = Math.floor(timeLeft / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      return `${hours}h ${minutes}m ${seconds}s`;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [flight.departure?.scheduled]);

  const calculateFlightDuration = (departureTime, arrivalTime) => {
    if (!departureTime || !arrivalTime) return 'N/A';
    const departure = new Date(departureTime);
    const arrival = new Date(arrivalTime);
    const durationMs = arrival - departure;

    const hours = Math.floor(durationMs / (1000 * 60 * 60));
    const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));

    return `${hours}h ${minutes}m`;
  };

  const handleBookFlight = () => {
    navigate('/contact'); // or '/signup' depending on your routing
  };

  return (
    <div className="ticket-box">
      <div className="ticket-header">
        <img
          src={`https://logo.clearbit.com/${flight.airline?.name
            ?.replace(/\s+/g, '')
            ?.toLowerCase()}.com`}
          alt={flight.airline?.name || 'Airline Logo'}
          className="airline-logo"
        />
        <h2>{flight.airline?.name || 'N/A'}</h2>
        <div className="flight-timer">{timeLeft}</div>
      </div>
      <div className="ticket-body">
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
        <p className="flight-status">
          Status: {flight.flight_status || 'N/A'}
        </p>
        <p className="flight-terminal">
          Departure Terminal: {flight.departure?.terminal || 'N/A'}
        </p>
        <p className="flight-gate">
          Departure Gate: {flight.departure?.gate || 'N/A'}
        </p>
        <p className="flight-terminal">
          Arrival Terminal: {flight.arrival?.terminal || 'N/A'}
        </p>
        <div className="price-section">
          <button className="price-button" onClick={handleBookFlight}>Book Flight</button>
          <div className="price-dropdown">
            <p>With Heavy Baggage: $500</p>
            <p>Without Heavy Baggage: $450</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightBookingsPage;