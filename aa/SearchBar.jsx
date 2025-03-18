import React, { useState } from 'react';
import { FaMapMarkerAlt, FaHiking, FaCalendarAlt, FaUsers, FaSearch, FaChevronDown } from 'react-icons/fa';

const SearchBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const currencies = [
    { code: 'USD', name: 'United States Dollar' },
    { code: 'INR', name: 'Indian Rupee' }
  ];

  const handleCurrencySelect = (currencyCode) => {
    setSelectedCurrency(currencyCode);
    setIsDropdownOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Currency Selector */}
      <div className="absolute top-4 right-6 z-20">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-1 bg-black text-white px-3 py-1.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-200"
          >
            <span>{selectedCurrency}</span>
            <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Currency Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 animate-fadeIn">
              <div className="px-4 py-2 border-b border-gray-100">
                <h3 className="text-sm font-semibold text-gray-500">Select Your Currency</h3>
              </div>
              {currencies.map((currency) => (
                <button
                  key={currency.code}
                  onClick={() => handleCurrencySelect(currency.code)}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-150"
                >
                  <span className="font-medium">{currency.code}</span>
                  <span className="ml-2 text-sm text-gray-500">{currency.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Search Container */}
      <div className="bg-white rounded-full shadow-lg p-2 sm:p-4 mt-8 relative">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
          {/* Destination Input */}
          <div className="flex-1 relative">
            <div className="flex items-center px-4 py-2 border-b-2 sm:border-b-0 sm:border-r-2 border-gray-100">
              <FaMapMarkerAlt className="text-gray-400 mr-3" />
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-gray-500">Destination</label>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="w-full focus:outline-none text-gray-700"
                />
              </div>
            </div>
          </div>

          {/* Activity Input */}
          <div className="flex-1 relative">
            <div className="flex items-center px-4 py-2 border-b-2 sm:border-b-0 sm:border-r-2 border-gray-100">
              <FaHiking className="text-gray-400 mr-3" />
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-gray-500">Activity</label>
                <select className="w-full focus:outline-none text-gray-700 bg-transparent">
                  <option value="">Select activity</option>
                  <option value="trekking">Trekking</option>
                  <option value="sightseeing">Sightseeing</option>
                  <option value="camping">Camping</option>
                </select>
              </div>
            </div>
          </div>

          {/* Dates Input */}
          <div className="flex-1 relative">
            <div className="flex items-center px-4 py-2 border-b-2 sm:border-b-0 sm:border-r-2 border-gray-100">
              <FaCalendarAlt className="text-gray-400 mr-3" />
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-gray-500">Dates</label>
                <input
                  type="date"
                  className="w-full focus:outline-none text-gray-700"
                />
              </div>
            </div>
          </div>

          {/* Guests Input */}
          <div className="flex-1 relative">
            <div className="flex items-center px-4 py-2">
              <FaUsers className="text-gray-400 mr-3" />
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-gray-500">Guests</label>
                <input
                  type="number"
                  min="1"
                  placeholder="Add guests"
                  className="w-full focus:outline-none text-gray-700"
                />
              </div>
            </div>
          </div>

          {/* Search Button */}
          <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
            <FaSearch className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar; 