import React, { useState } from 'react';
import Select from 'react-select';
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
    setIsExpanded(true);
  };

  const airportOptions = [
    { value: 'JFK', label: 'John F. Kennedy International Airport' },
    { value: 'LAX', label: 'Los Angeles International Airport' },
    { value: 'ORD', label: "O'Hare International Airport" },
    // Add more options as needed
  ];

  const renderFlightFields = () => (
    <>
      <Select
        name="flyingFrom"
        options={airportOptions}
        placeholder="Flying From"
        onChange={(option) => setFormData({ ...formData, flyingFrom: option.value })}
        onFocus={handleExpand}
      />
      <Select
        name="flyingTo"
        options={airportOptions}
        placeholder="Flying To"
        onChange={(option) => setFormData({ ...formData, flyingTo: option.value })}
        onFocus={handleExpand}
      />
      <input type="date" name="departureDate" onChange={handleInputChange} />
      <input type="date" name="returnDate" onChange={handleInputChange} />
      {isExpanded && (
        <>
          <input
            type="text"
            name="airline"
            placeholder="Airline"
            onChange={handleInputChange}
          />
          <select name="class" onChange={handleInputChange}>
            <option value="">Class</option>
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first">First</option>
          </select>
          <select name="passengers" onChange={handleInputChange}>
            <option value="">No of Passengers</option>
            {[...Array(9).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1} Passenger{num > 0 ? 's' : ''}
              </option>
            ))}
          </select>
        </>
      )}
    </>
  );

  const renderHotelFields = () => (
    <>
      <input
        type="text"
        name="destination"
        placeholder="Destination"
        onChange={handleInputChange}
        onFocus={handleExpand}
      />
      <input type="date" name="checkInDate" onChange={handleInputChange} />
      <input type="date" name="checkOutDate" onChange={handleInputChange} />
      {isExpanded && (
        <>
          <select name="rooms" onChange={handleInputChange}>
            <option value="">No of Rooms</option>
            {[...Array(9).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1} Room{num > 0 ? 's' : ''}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="guestsAge"
            placeholder="Guests Age"
            onChange={handleInputChange}
          />
        </>
      )}
    </>
  );

  const renderFlightHotelFields = () => (
    <>
      {renderFlightFields()}
      {renderHotelFields()}
    </>
  );

  const renderPackageFields = () => (
    <>
      <input
        type="text"
        name="destination"
        placeholder="Destination"
        onChange={handleInputChange}
      />
      <input type="date" name="startDate" onChange={handleInputChange} />
      <input type="date" name="endDate" onChange={handleInputChange} />
      <select name="numberOfPeople" onChange={handleInputChange}>
        <option value="">No of People</option>
        {[...Array(9).keys()].map((num) => (
          <option key={num + 1} value={num + 1}>
            {num + 1} Person{num > 0 ? 's' : ''}
          </option>
        ))}
      </select>
    </>
  );

  const renderFormFields = () => {
    switch (activeTab) {
      case 'flights':
        return renderFlightFields();
      case 'hotels':
        return renderHotelFields();
      case 'flightHotels':
        return renderFlightHotelFields();
      case 'packages':
        return renderPackageFields();
      default:
        return null;
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
          Flight & Hotels
        </button>
        <button
          className={activeTab === 'packages' ? 'active' : ''}
          onClick={() => handleTabClick('packages')}
        >
          Packages
        </button>
      </div>
      <div className="form-fields">{renderFormFields()}</div>
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;