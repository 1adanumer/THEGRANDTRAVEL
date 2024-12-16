import React, { useState } from 'react';
import './FlightBookingPage.css';
import FlightFilters from '../FlightFilters/FlightFilters';

const FlightBookingsPage = () => {
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

  // State for filtered tickets (no filters in this version)
  const [filteredTickets, setFilteredTickets] = useState(tickets);

  return (
    <div className="flight-page">
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

export default FlightBookingsPage;