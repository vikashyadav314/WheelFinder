function CarCard(props) {
  return (
    <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-700/50 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-[1.03] transition-all duration-300 flex flex-col">

      {/* Car Image */}
      <div className="h-44 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
        {props.image ? (
          <img
            src={props.image}
            alt={props.name}
            className="w-full h-full object-cover rounded-xl"
          />
        ) : (
          <span className="text-5xl opacity-30">🚗</span>
        )}
      </div>

      {/* Car Info */}
      <h2 className="text-xl font-bold text-white">
        {props.name}
      </h2>

      <div className="flex items-center gap-2 mt-2">
        <span className="text-xs bg-slate-700/60 text-gray-300 px-2.5 py-1 rounded-full">
          {props.fuel}
        </span>
        {props.seats && (
          <span className="text-xs bg-slate-700/60 text-gray-300 px-2.5 py-1 rounded-full">
            {props.seats} Seats
          </span>
        )}
      </div>

      <p className="text-blue-400 font-bold text-lg mt-3">
        {props.price}
      </p>

      {/* View Details Button */}
      <button
        onClick={() => props.onViewDetails && props.onViewDetails()}
        className="mt-auto pt-4 w-full bg-gradient-to-r from-blue-600 to-blue-500 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
      >
        View Details →
      </button>

    </div>
  );
}

export default CarCard;