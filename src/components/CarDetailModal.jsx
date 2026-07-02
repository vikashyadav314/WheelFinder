function CarDetailModal(props) {
  if (!props.car) return null;

  const car = props.car;

  const specs = [
    { label: "Engine", value: car.engine, icon: "🔧" },
    { label: "Power", value: car.power, icon: "⚡" },
    { label: "Torque", value: car.torque, icon: "💪" },
    { label: "Transmission", value: car.transmission, icon: "⚙️" },
    { label: "Mileage", value: car.mileage, icon: "⛽" },
    { label: "Top Speed", value: car.topSpeed, icon: "🏎️" },
    { label: "Fuel Type", value: car.fuel, icon: "🛢️" },
    { label: "Seats", value: car.seats + " Seater", icon: "💺" },
    { label: "Body Type", value: car.bodyType, icon: "🚗" },
    { label: "Brand", value: car.brand, icon: "🏷️" },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={props.onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Modal Content */}
      <div
        className="relative bg-slate-900 border border-slate-700/50 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-blue-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={props.onClose}
          className="absolute top-4 right-4 z-10 bg-slate-800/80 hover:bg-red-500/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 text-xl"
        >
          ✕
        </button>

        {/* Detail Car Image */}
        <div className="relative h-72 sm:h-96 overflow-hidden rounded-t-2xl">
          <img
            src={car.detailImage || car.image}
            alt={car.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

          {/* Name & Price overlay */}
          <div className="absolute bottom-6 left-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">
              {car.name}
            </h2>
            <p className="text-2xl font-semibold text-blue-400 mt-1 drop-shadow-lg">
              {car.price}
            </p>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            📋 Specifications
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="bg-slate-800/60 border border-slate-700/40 rounded-xl p-4 text-center hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{spec.icon}</div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                  {spec.label}
                </p>
                <p className="text-white font-semibold text-sm">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-300">
              🛒 Book Test Drive
            </button>
            <button className="border border-slate-600 px-8 py-3 rounded-xl font-semibold text-white hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300">
              ❤️ Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetailModal;
