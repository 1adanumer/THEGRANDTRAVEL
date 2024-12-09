import React, { useState } from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = () => {
  const [flyingFrom, setFlyingFrom] = useState("");
  const [flyingTo, setFlyingTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [classType, setClassType] = useState("Economy");

  const handleSearch = () => {
    alert(
      `Searching flights from ${flyingFrom} to ${flyingTo} departing on ${departureDate} and returning on ${returnDate}. ${passengers} passenger(s) in ${classType}.`
    );
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <div className="search-field">
          <FaPlaneDeparture className="icon" />
          <input
            type="text"
            placeholder="Flying From"
            value={flyingFrom}
            onChange={(e) => setFlyingFrom(e.target.value)}
          />
        </div>
        <div className="search-field">
          <FaPlaneArrival className="icon" />
          <input
            type="text"
            placeholder="Flying To"
            value={flyingTo}
            onChange={(e) => setFlyingTo(e.target.value)}
          />
        </div>
        <div className="search-field">
          <FaCalendarAlt className="icon" />
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>
        <div className="search-field">
          <FaCalendarAlt className="icon" />
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>
        <button className="search-button" onClick={handleSearch}>
          <FaSearch className="icon" /> Search
        </button>

        {/* <div className="additional-options">
          <label>
            Passengers:
            <select value={passengers} onChange={(e) => setPassengers(e.target.value)}>
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </label>
          <label>
            Class:
            <select value={classType} onChange={(e) => setClassType(e.target.value)}>
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
            </select>
          </label>
        </div> */}
      </div>
    </div>
  );
};

export default SearchBar;
