import React, { useState } from 'react';
import './FlightBookingPage.css';

const FlightBookingPage = () => {
  const tickets = [
    {
      id: 1,
      airline: 'Air India',
      from: 'Delhi (DEL)',
      to: 'New York (JFK)',
      time: '10:30 AM - 5:45 PM',
      slots: 5,
      price: 500,
      rating: 4.5,
    },
    {
      id: 2,
      airline: 'PIA',
      from: 'Karachi (KHI)',
      to: 'Dubai (DXB)',
      time: '2:00 PM - 4:30 PM',
      slots: 3,
      price: 300,
      rating: 4.2,
    },
    {
      id: 3,
      airline: 'Singapore Airlines',
      from: 'Singapore (SIN)',
      to: 'London (LHR)',
      time: '8:00 AM - 4:00 PM',
      slots: 8,
      price: 750,
      rating: 4.8,
    },
    {
      id: 4,
      airline: 'Air China',
      from: 'Beijing (PEK)',
      to: 'Tokyo (NRT)',
      time: '6:00 AM - 9:15 AM',
      slots: 12,
      price: 400,
      rating: 4.3,
    },
    {
      id: 5,
      airline: 'Emirates',
      from: 'Dubai (DXB)',
      to: 'New York (JFK)',
      time: '12:00 PM - 6:00 PM',
      slots: 2,
      price: 600,
      rating: 4.7,
    },
    {
        id: 6,
        airline: 'Air India',
        from: 'Delhi (DEL)',
        to: 'New York (JFK)',
        time: '10:30 AM - 5:45 PM',
        slots: 5,
        price: 500,
        rating: 4.5,
        },
        {
        id: 7,
        airline: 'PIA',
        from: 'Karachi (KHI)',
        to: 'Dubai (DXB)',
        time: '2:00 PM - 4:30 PM',
        slots: 3,
        price: 300,
        rating: 4.2,
        },
        {
        id: 8,
        airline: 'Singapore Airlines',
        from: 'Singapore (SIN)',
        to: 'London (LHR)',
        time: '8:00 AM - 4:00 PM',
        slots: 8,
        price: 750,
        rating: 4.8,
        },
        {
        id: 9,
        airline: 'Air China',
        from: 'Beijing (PEK)',
        to: 'Tokyo (NRT)',
        time: '6:00 AM - 9:15 AM',
        slots: 12,
        price: 400,
        rating: 4.3,
        },
        {
        id: 10,
        airline: 'Emirates',
        from: 'Dubai (DXB)',
        to: 'New York (JFK)',
        time: '12:00 PM - 6:00 PM',
        slots: 2,
        price: 600,
        rating: 4.7,
    }
  ];

  // State for filters and filtered results
  const [filters, setFilters] = useState({
    airlines: [],
    priceOrder: '', // 'low-to-high' or 'high-to-low'
    nonStop: false,
    refundable: false,
    extraBaggage: false,
  });

  const [filteredTickets, setFilteredTickets] = useState(tickets);

  // Handle filter updates
  const updateFilters = (key, value) => {
    setFilters((prev) => {
      const updatedFilters = { ...prev, [key]: value };

      // Apply filtering logic
      let filtered = [...tickets];

      // Filter by airlines
      if (updatedFilters.airlines.length > 0) {
        filtered = filtered.filter((ticket) =>
          updatedFilters.airlines.includes(ticket.airline)
        );
      }

      // Sort by price
      if (updatedFilters.priceOrder === 'low-to-high') {
        filtered = filtered.sort((a, b) => a.price - b.price);
      } else if (updatedFilters.priceOrder === 'high-to-low') {
        filtered = filtered.sort((a, b) => b.price - a.price);
      }

      // Apply other filters
      if (updatedFilters.nonStop) {
        // Assuming we have a `nonStop` property in tickets
        filtered = filtered.filter((ticket) => ticket.nonStop);
      }

      if (updatedFilters.refundable) {
        // Assuming we have a `refundable` property in tickets
        filtered = filtered.filter((ticket) => ticket.refundable);
      }

      if (updatedFilters.extraBaggage) {
        // Assuming we have an `extraBaggage` property in tickets
        filtered = filtered.filter((ticket) => ticket.extraBaggage);
      }

      setFilteredTickets(filtered);
      return updatedFilters;
    });
  };

  return (
    <div className="flight-page">
      <aside className="filter-bar">
        <h2>Filters</h2>
        <div className="filter-section">
          <h3>Airlines</h3>
          {['Air India', 'PIA', 'Air China', 'Singapore Airlines', 'Emirates'].map((airline) => (
            <label key={airline}>
              <input
                type="checkbox"
                onChange={(e) => {
                  const checked = e.target.checked;
                  updateFilters(
                    'airlines',
                    checked
                      ? [...filters.airlines, airline]
                      : filters.airlines.filter((a) => a !== airline)
                  );
                }}
              />{' '}
              {airline}
            </label>
          ))}
        </div>
        <div className="filter-section">
          <h3>Price</h3>
          <button
            className="filter-button"
            onClick={() => updateFilters('priceOrder', 'low-to-high')}
          >
            Low to High
          </button>
          <button
            className="filter-button"
            onClick={() => updateFilters('priceOrder', 'high-to-low')}
          >
            High to Low
          </button>
        </div>
        <div className="filter-section">
          <h3>Other Features</h3>
          <label>
            <input
              type="checkbox"
              onChange={(e) => updateFilters('nonStop', e.target.checked)}
            />{' '}
            Non-stop Flights
          </label>
          <label>
            <input
              type="checkbox"
              onChange={(e) => updateFilters('refundable', e.target.checked)}
            />{' '}
            Refundable
          </label>
          <label>
            <input
              type="checkbox"
              onChange={(e) => updateFilters('extraBaggage', e.target.checked)}
            />{' '}
            Extra Baggage
          </label>
        </div>
      </aside>

      <main className="tickets-section">
        <h1>Available Flights</h1>
        {filteredTickets.map((ticket) => (
          <div className="ticket-box" key={ticket.id}>
            <div className="ticket-header">
              <h2>{ticket.airline}</h2>
              <span className="rating">⭐ {ticket.rating}</span>
            </div>
            <p>
              {ticket.from} → {ticket.to}
            </p>
            <p>{ticket.time}</p>
            <p>Slots Left: {ticket.slots}</p>
            <p>Price: ${ticket.price}</p>
            <button className="book-now-button">Book Now</button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default FlightBookingPage;
