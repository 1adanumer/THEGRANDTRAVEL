import React, { useState } from 'react';
import './FlightBookingPage.css';

const flights = [
  {
    id: 1,
    airline: 'Air India',
    from: 'Delhi (DEL)',
    to: 'New York (JFK)',
    departureTime: '10:30 AM',
    arrivalTime: '5:45 PM',
    slots: 5,
    price: 500,
    rating: 4.5,
  },
  {
    id: 2,
    airline: 'PIA',
    from: 'Karachi (KHI)',
    to: 'Dubai (DXB)',
    departureTime: '2:00 PM',
    arrivalTime: '4:30 PM',
    slots: 3,
    price: 300,
    rating: 4.2,
  },
  {
    id: 3,
    airline: 'Singapore Airlines',
    from: 'Singapore (SIN)',
    to: 'London (LHR)',
    departureTime: '8:00 AM',
    arrivalTime: '4:00 PM',
    slots: 8,
    price: 750,
    rating: 4.8,
  },
  {
    id: 4,
    airline: 'Air China',
    from: 'Beijing (PEK)',
    to: 'Tokyo (NRT)',
    departureTime: '6:00 AM',
    arrivalTime: '9:15 AM',
    slots: 12,
    price: 400,
    rating: 4.3,
  },
  {
    id: 5,
    airline: 'Emirates',
    from: 'Dubai (DXB)',
    to: 'New York (JFK)',
    departureTime: '12:00 PM',
    arrivalTime: '6:00 PM',
    slots: 2,
    price: 600,
    rating: 4.7,
  },
  {
    id: 6,
    airline: 'Qatar Airways',
    from: 'Doha (DOH)',
    to: 'London (LHR)',
    departureTime: '1:00 AM',
    arrivalTime: '7:00 AM',
    slots: 10,
    price: 650,
    rating: 4.6,
  },
  {
    id: 7,
    airline: 'Lufthansa',
    from: 'Frankfurt (FRA)',
    to: 'San Francisco (SFO)',
    departureTime: '9:00 AM',
    arrivalTime: '12:00 PM',
    slots: 7,
    price: 700,
    rating: 4.4,
  },
  {
    id: 8,
    airline: 'British Airways',
    from: 'London (LHR)',
    to: 'Sydney (SYD)',
    departureTime: '10:00 PM',
    arrivalTime: '6:00 AM',
    slots: 4,
    price: 800,
    rating: 4.5,
  },
  {
    id: 9,
    airline: 'Delta Airlines',
    from: 'Atlanta (ATL)',
    to: 'Paris (CDG)',
    departureTime: '3:00 PM',
    arrivalTime: '5:30 AM',
    slots: 6,
    price: 550,
    rating: 4.3,
  },
  {
    id: 10,
    airline: 'United Airlines',
    from: 'Chicago (ORD)',
    to: 'Tokyo (NRT)',
    departureTime: '7:00 AM',
    arrivalTime: '10:00 PM',
    slots: 9,
    price: 750,
    rating: 4.2,
  },
  {
    id: 11,
    airline: 'Air France',
    from: 'Paris (CDG)',
    to: 'New York (JFK)',
    departureTime: '11:00 AM',
    arrivalTime: '2:00 PM',
    slots: 5,
    price: 600,
    rating: 4.5,
  },
  {
    id: 12,
    airline: 'KLM',
    from: 'Amsterdam (AMS)',
    to: 'Los Angeles (LAX)',
    departureTime: '4:00 PM',
    arrivalTime: '7:00 PM',
    slots: 8,
    price: 700,
    rating: 4.4,
  },
  {
    id: 13,
    airline: 'Turkish Airlines',
    from: 'Istanbul (IST)',
    to: 'Toronto (YYZ)',
    departureTime: '2:00 AM',
    arrivalTime: '8:00 AM',
    slots: 6,
    price: 650,
    rating: 4.3,
  },
  {
    id: 14,
    airline: 'Cathay Pacific',
    from: 'Hong Kong (HKG)',
    to: 'San Francisco (SFO)',
    departureTime: '9:00 PM',
    arrivalTime: '6:00 AM',
    slots: 7,
    price: 800,
    rating: 4.6,
  },
  {
    id: 15,
    airline: 'ANA',
    from: 'Tokyo (NRT)',
    to: 'Los Angeles (LAX)',
    departureTime: '5:00 PM',
    arrivalTime: '11:00 AM',
    slots: 10,
    price: 750,
    rating: 4.5,
  },
  {
    id: 16,
    airline: 'Qantas',
    from: 'Sydney (SYD)',
    to: 'Dubai (DXB)',
    departureTime: '6:00 AM',
    arrivalTime: '2:00 PM',
    slots: 4,
    price: 700,
    rating: 4.4,
  },
  {
    id: 17,
    airline: 'Etihad Airways',
    from: 'Abu Dhabi (AUH)',
    to: 'New York (JFK)',
    departureTime: '8:00 AM',
    arrivalTime: '4:00 PM',
    slots: 5,
    price: 650,
    rating: 4.5,
  },
  {
    id: 18,
    airline: 'Swiss International Air Lines',
    from: 'Zurich (ZRH)',
    to: 'Chicago (ORD)',
    departureTime: '10:00 AM',
    arrivalTime: '1:00 PM',
    slots: 6,
    price: 700,
    rating: 4.3,
  },
  {
    id: 19,
    airline: 'Emirates',
    from: 'Dubai (DXB)',
    to: 'Los Angeles (LAX)',
    departureTime: '11:00 PM',
    arrivalTime: '7:00 AM',
    slots: 8,
    price: 800,
    rating: 4.7,
  },
  {
    id: 20,
    airline: 'Virgin Atlantic',
    from: 'London (LHR)',
    to: 'New York (JFK)',
    departureTime: '9:00 AM',
    arrivalTime: '12:00 PM',
    slots: 7,
    price: 600,
    rating: 4.5,
  },
  {
    id: 21,
    airline: 'Air Canada',
    from: 'Toronto (YYZ)',
    to: 'Vancouver (YVR)',
    departureTime: '1:00 PM',
    arrivalTime: '3:00 PM',
    slots: 5,
    price: 400,
    rating: 4.2,
  },
  {
    id: 22,
    airline: 'American Airlines',
    from: 'Dallas (DFW)',
    to: 'Miami (MIA)',
    departureTime: '6:00 AM',
    arrivalTime: '9:00 AM',
    slots: 6,
    price: 300,
    rating: 4.1,
  },
  {
    id: 23,
    airline: 'Alaska Airlines',
    from: 'Seattle (SEA)',
    to: 'Anchorage (ANC)',
    departureTime: '7:00 PM',
    arrivalTime: '9:00 PM',
    slots: 4,
    price: 350,
    rating: 4.3,
  },
  {
    id: 24,
    airline: 'JetBlue',
    from: 'Boston (BOS)',
    to: 'Orlando (MCO)',
    departureTime: '8:00 AM',
    arrivalTime: '11:00 AM',
    slots: 7,
    price: 250,
    rating: 4.0,
  },
  {
    id: 25,
    airline: 'Southwest Airlines',
    from: 'Las Vegas (LAS)',
    to: 'Denver (DEN)',
    departureTime: '9:00 AM',
    arrivalTime: '11:00 AM',
    slots: 5,
    price: 200,
    rating: 4.1,
  },
  {
    id: 26,
    airline: 'Spirit Airlines',
    from: 'Fort Lauderdale (FLL)',
    to: 'Atlanta (ATL)',
    departureTime: '10:00 AM',
    arrivalTime: '12:00 PM',
    slots: 6,
    price: 150,
    rating: 3.8,
  },
  {
    id: 27,
    airline: 'Frontier Airlines',
    from: 'Denver (DEN)',
    to: 'Las Vegas (LAS)',
    departureTime: '11:00 AM',
    arrivalTime: '1:00 PM',
    slots: 4,
    price: 180,
    rating: 3.9,
  },
  {
    id: 28,
    airline: 'Hawaiian Airlines',
    from: 'Honolulu (HNL)',
    to: 'Los Angeles (LAX)',
    departureTime: '12:00 PM',
    arrivalTime: '8:00 PM',
    slots: 7,
    price: 500,
    rating: 4.5,
  },
  {
    id: 29,
    airline: 'Avianca',
    from: 'Bogota (BOG)',
    to: 'Miami (MIA)',
    departureTime: '1:00 PM',
    arrivalTime: '4:00 PM',
    slots: 5,
    price: 350,
    rating: 4.2,
  },
  {
    id: 30,
    airline: 'Aeromexico',
    from: 'Mexico City (MEX)',
    to: 'Los Angeles (LAX)',
    departureTime: '2:00 PM',
    arrivalTime: '5:00 PM',
    slots: 6,
    price: 400,
    rating: 4.3,
  },
];


const FlightBookingsPage = () => {
  const [filteredFlights, setFilteredFlights] = useState(flights);
  const [filters, setFilters] = useState({
    price: '',
    rating: '',
    airline: '',
    departureTime: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const flightsPerPage = 10;

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filterFlights = () => {
    let filtered = flights;

    if (filters.price) {
      filtered = filtered.filter((flight) => flight.price <= filters.price);
    }

    if (filters.rating) {
      filtered = filtered.filter((flight) => flight.rating >= filters.rating);
    }

    if (filters.airline) {
      filtered = filtered.filter((flight) => flight.airline.toLowerCase().includes(filters.airline.toLowerCase()));
    }

    if (filters.departureTime) {
      filtered = filtered.filter((flight) => flight.departureTime.includes(filters.departureTime));
    }

    setFilteredFlights(filtered);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  // Calculate the flights to display based on the current page
  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  const currentFlights = filteredFlights.slice(indexOfFirstFlight, indexOfLastFlight);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flight-page">
      <div className="filter-bar">
        <h3>Filter by:</h3>

        {/* Price Filter */}
        <div>
          <label>Price:</label>
          <select name="price" onChange={handleFilterChange}>
            <option value="">Select Price</option>
            <option value="200">$200</option>
            <option value="300">$300</option>
            <option value="400">$400</option>
            <option value="500">$500</option>
            <option value="600">$600</option>
            <option value="700">$700</option>
            <option value="800">$800</option>
          </select>
        </div>

        {/* Rating Filter */}
        <div>
          <label>Rating:</label>
          <select name="rating" onChange={handleFilterChange}>
            <option value="">Select Rating</option>
            <option value="4">4 & Above</option>
            <option value="4.5">4.5 & Above</option>
            <option value="5">5</option>
          </select>
        </div>

        {/* Airline Filter */}
        <div>
          <label>Airline:</label>
          <input
            type="text"
            name="airline"
            placeholder="Search Airline"
            onChange={handleFilterChange}
          />
        </div>

        {/* Departure Time Filter */}
        <div>
          <label>Departure Time:</label>
          <input
            type="text"
            name="departureTime"
            placeholder="Search Departure Time"
            onChange={handleFilterChange}
          />
        </div>

        <button onClick={filterFlights}>Apply Filters</button>
      </div>

      <main className="tickets-section">
        <h1>Available Flights</h1>
        {currentFlights.map((flight) => (
          <div className="ticket-box" key={flight.id}>
            <div className="ticket-header">
              <h2>{flight.airline}</h2>
              <span className="rating">⭐ {flight.rating}</span>
            </div>
            <div className="ticket-body">
              <div className="flight-info">
                <p className="flight-route">
                  {flight.from} → {flight.to}
                </p>
                <p className="flight-time">
                  {flight.departureTime} - {flight.arrivalTime}
                </p>
                <p className="flight-duration">Duration: 8h 15m</p>
                <p className="flight-layovers">Layovers: 1</p>
                <p className="flight-aircraft">Aircraft: Boeing 777</p>
                <p className="flight-slots">Slots Left: {flight.slots}</p>
                <p className="flight-price">Price: ${flight.price}</p>
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