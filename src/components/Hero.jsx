import heroCar from "../assets/images/hero-car1.png";
function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-12 md:py-24 flex items-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">

        {/* Left Side */}
        <div className="max-w-xl z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-sm mb-6">
            ✨ The New Way to Find Cars
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Find the Perfect Car for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Lifestyle</span>
          </h1>

          <p className="text-gray-400 mt-6 text-lg md:text-xl leading-relaxed">
            Compare cars, estimate ownership costs, and discover
            the best car within your budget with AI-driven insights.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button 
              onClick={() => document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Explore Cars
            </button>

            <button 
              onClick={() => document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 px-8 py-4 rounded-xl font-semibold text-white hover:bg-slate-700 transition-all duration-300 hover:border-slate-500"
            >
              Find My Car
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center items-center">

           {/* Blue Glow */}
         <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

         {/* Car Image */}
         <img
          src={heroCar}
          alt="Sports Car"
          className="relative w-[720px]"
          />

</div>

      </div>
    </section>
  );
}

export default Hero;