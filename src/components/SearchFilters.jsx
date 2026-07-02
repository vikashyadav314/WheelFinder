import { useState } from "react";
import Dropdown from "./Dropdown";
import CarCard from "./CarCard";
import CarDetailModal from "./CarDetailModal";
import { budgetOptions, fuelOptions, brandOptions, seatOptions } from "../data/filterOption";

function SearchFilters() {
  const [filters, setFilters] = useState({
    budget: "",
    fuel: "",
    brand: "",
    seats: "",
  });

  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    // Build query params
    const queryParams = new URLSearchParams();
    if (filters.brand) queryParams.append('brand', filters.brand);
    if (filters.fuel) queryParams.append('fuel', filters.fuel);
    // budget and seats can also be appended, handled by backend
    
    fetch(`http://localhost:5000/api/cars?${queryParams.toString()}`)
      .then(res => res.json())
      .then(data => {
        setResults(data);
        setHasSearched(true);
      })
      .catch(err => console.error("Search error:", err));
  };

  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3">
          🔍 Find Your Perfect Car
        </h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Use filters to narrow down the best car that fits your budget and needs.
        </p>
      </div>

      {/* Filter Card with Glassmorphism */}
      <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 shadow-lg shadow-blue-500/5">
        <div className="flex flex-wrap gap-6">
          <Dropdown 
            label="Budget" 
            icon="💰" 
            options={budgetOptions} 
            value={filters.budget}
            onChange={(e) => handleFilterChange("budget", e.target.value)}
          />
          <Dropdown 
            label="Fuel Type" 
            icon="⛽" 
            options={fuelOptions} 
            value={filters.fuel}
            onChange={(e) => handleFilterChange("fuel", e.target.value)}
          />
          <Dropdown 
            label="Brand" 
            icon="🏷️" 
            options={brandOptions} 
            value={filters.brand}
            onChange={(e) => handleFilterChange("brand", e.target.value)}
          />
          <Dropdown 
            label="Seats" 
            icon="💺" 
            options={seatOptions} 
            value={filters.seats}
            onChange={(e) => handleFilterChange("seats", e.target.value)}
          />
        </div>

        {/* Search Button */}
        <div className="mt-8 flex justify-center">
          <button 
            onClick={handleSearch}
            className="bg-gradient-to-r from-blue-600 to-blue-500 px-10 py-3.5 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search Cars
          </button>
        </div>
      </div>

      {/* Results Section */}
      {hasSearched && (
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 border-b border-slate-700 pb-4">
            Search Results ({results.length})
          </h3>
          
          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.map((car, index) => (
                <CarCard
                  key={car._id || index}
                  name={car.name}
                  price={car.price}
                  fuel={car.fuel}
                  seats={car.seats}
                  image={car.image}
                  onViewDetails={() => setSelectedCar(car)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-slate-800/30 rounded-xl border border-slate-700/50">
              <div className="text-4xl mb-4">🤷‍♂️</div>
              <p className="text-xl text-gray-300">No cars found matching your criteria.</p>
              <p className="text-gray-500 mt-2">Try adjusting your filters.</p>
            </div>
          )}
        </div>
      )}

      {/* Detail Modal */}
      {selectedCar && (
        <CarDetailModal
          car={selectedCar}
          onClose={() => setSelectedCar(null)}
        />
      )}
    </section>
  );
}

export default SearchFilters;