import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState('flights');
  const [formData, setFormData] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setFormData({});
    setIsExpanded(false);
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

  const handleExpand = () => {
    if (activeTab === 'flights') {
      setIsExpanded(true);
    }
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
              onFocus={handleExpand}
            />
            <input
              type="text"
              name="destination"
              placeholder="Arrival City"
              onChange={handleInputChange}
              onFocus={handleExpand}
            />
            <input
              type="date"
              name="departureDate"
              placeholder="Departure Date"
              aria-label="Departure Date"
              onChange={handleInputChange}
            />
            <input type="date" name="returnDate" onChange={handleInputChange} />
            {isExpanded && (
              <div className="expanded-fields">
                <select name="class" onChange={handleInputChange}>
                  <option value="">Class</option>
                  <option value="economy">Economy</option>
                  <option value="business">Business</option>
                  <option value="first">First</option>
                </select>
                <select name="passengers" onChange={handleInputChange}>
                  <option value="">No of Passengers</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
              </div>
            )}
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