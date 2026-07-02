import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedCars from "../components/FeaturedCars";
import SearchFilters from "../components/SearchFilters";
import ElectricCars from "../components/ElectricCars";
import LuxuryCars from "../components/LuxuryCars";

function Home() {
  return (
    <div className="bg-slate-900 min-h-screen text-white">
       <Navbar />
       <Hero />
       <section id="search">
         <SearchFilters />
       </section>
       <section id="explore">
         <FeaturedCars />
       </section>
       <ElectricCars />
       <LuxuryCars />
    </div>
  );
}

export default Home;