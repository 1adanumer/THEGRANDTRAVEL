import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState('flights');
  const [formData, setFormData] = useState({});

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setFormData({});
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    const pageMap = {
      flights: '/flights',
      hotels: '/hotels',
      flightHotels: '/flight-hotels',
      packages: '/packages',
    };

    const queryString = new URLSearchParams(formData).toString();
    window.location.href = `${pageMap[activeTab]}?${queryString}`;
  };

  return (
    <div className="search-bar">
      <div className="tabs">
        <button
          className={activeTab === 'flights' ? 'active' : ''}
          onClick={() => handleTabClick('flights')}
        >
          Flights
        </button>
        <button
          className={activeTab === 'hotels' ? 'active' : ''}
          onClick={() => handleTabClick('hotels')}
        >
          Hotels
        </button>
        <button
          className={activeTab === 'flightHotels' ? 'active' : ''}
          onClick={() => handleTabClick('flightHotels')}
        >
          Flight + Hotels
        </button>
        <button
          className={activeTab === 'packages' ? 'active' : ''}
          onClick={() => handleTabClick('packages')}
        >
          Packages
        </button>
      </div>

      <div className="form-container">
        {activeTab === 'flights' && (
          <div className="flights-form">
            <input
              type="text"
              name="departure"
              placeholder="Departure City"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="destination"
              placeholder="Arrival City"
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="departureDate"
              placeholder='Departure Date'
              aria-label='Departure Date'
              onChange={handleInputChange}
            />
            <input type="date" name="returnDate" onChange={handleInputChange} />
          </div>
        )}

        {activeTab === 'hotels' && (
          <div className="hotels-form">
            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="checkIn"
              placeholder="Check-in Date"
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="checkOut"
              placeholder="Check-out Date"
              onChange={handleInputChange}
            />
          </div>
        )}

        {activeTab === 'flightHotels' && (
          <div className="flight-hotels-form">
            <input
              type="text"
              name="departure"
              placeholder="Departure City"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="destination"
              placeholder="Destination City"
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="departureDate"
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="returnDate"
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="checkIn"
              placeholder="Hotel Check-in"
              onChange={handleInputChange}
            />
          </div>
        )}

        {activeTab === 'packages' && (
          <div className="packages-form">
            <input
              type="text"
              name="destination"
              placeholder="Destination"
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="startDate"
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="endDate"
              onChange={handleInputChange}
            />
          </div>
        )}

        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
