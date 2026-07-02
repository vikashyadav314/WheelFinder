import { useState, useEffect } from "react";
import CarCard from "./CarCard";
import CarDetailModal from "./CarDetailModal";

function FeaturedCars() {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/cars/category/featured')
      .then(res => res.json())
      .then(data => setCars(data))
      .catch(err => console.error("Error fetching featured cars:", err));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      <h2 className="text-4xl font-bold mb-10">
        🔥 Featured Cars
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car, index) => (
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

export default FeaturedCars;