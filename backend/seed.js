require('dotenv').config();
const mongoose = require('mongoose');
const Car = require('./models/Car');

// Existing images from the frontend assets
const featuredCarsData = [
  {
    name: "BMW M4",
    price: "₹72 Lakh",
    fuel: "Petrol",
    seats: 4,
    brand: "BMW",
    image: "/src/assets/images/bmw-m4.jpg",
    detailImage: "/src/assets/images/bmw-m4-green.jpg",
    engine: "2,993 cc Twin-Turbo Inline-6",
    power: "473 BHP",
    torque: "550 Nm",
    transmission: "6-Speed Manual / 8-Speed Auto",
    mileage: "8-10 km/l",
    topSpeed: "250 km/h",
    bodyType: "Coupe",
    category: "featured"
  },
  {
    name: "Toyota Fortuner",
    price: "₹38 Lakh",
    fuel: "Diesel",
    seats: 7,
    brand: "Toyota",
    image: "/src/assets/images/fortuner.jpg",
    detailImage: "/src/assets/images/fortuner.jpeg",
    engine: "2,755 cc Diesel",
    power: "201 BHP",
    torque: "500 Nm",
    transmission: "6-Speed Auto",
    mileage: "10-14 km/l",
    topSpeed: "180 km/h",
    bodyType: "SUV",
    category: "featured"
  },
  {
    name: "Mahindra XUV700",
    price: "₹25 Lakh",
    fuel: "Diesel",
    seats: 7,
    brand: "Mahindra",
    image: "/src/assets/images/XUV-700.jpg",
    detailImage: "/src/assets/images/xuv-700.jpeg",
    engine: "2,184 cc Diesel",
    power: "182 BHP",
    torque: "420 Nm",
    transmission: "6-Speed Manual / 6-Speed Auto",
    mileage: "13-16 km/l",
    topSpeed: "200 km/h",
    bodyType: "SUV",
    category: "featured"
  },
  {
    name: "Hyundai Creta",
    price: "₹15 Lakh",
    fuel: "Petrol",
    seats: 5,
    brand: "Hyundai",
    image: "/src/assets/images/creta.jpg",
    detailImage: "/src/assets/images/creta.png",
    engine: "1,497 cc Turbo Petrol",
    power: "158 BHP",
    torque: "253 Nm",
    transmission: "7-Speed DCT",
    mileage: "17-21 km/l",
    topSpeed: "190 km/h",
    bodyType: "Compact SUV",
    category: "featured"
  },
  {
    name: "Tata Harrier",
    price: "₹20 Lakh",
    fuel: "Diesel",
    seats: 5,
    brand: "Tata",
    image: "/src/assets/images/harrier.jpg",
    detailImage: "/src/assets/images/haarrier.png",
    engine: "1,956 cc Diesel",
    power: "167 BHP",
    torque: "350 Nm",
    transmission: "6-Speed Manual / 6-Speed Auto",
    mileage: "14-17 km/l",
    topSpeed: "195 km/h",
    bodyType: "SUV",
    category: "featured"
  },
  {
    name: "Kia Seltos",
    price: "₹16 Lakh",
    fuel: "Petrol",
    seats: 5,
    brand: "Kia",
    image: "/src/assets/images/kia-seltos.jpg",
    detailImage: "/src/assets/images/kia-seltos.png",
    engine: "1,497 cc Turbo Petrol",
    power: "158 BHP",
    torque: "253 Nm",
    transmission: "7-Speed DCT",
    mileage: "16-20 km/l",
    topSpeed: "185 km/h",
    bodyType: "Compact SUV",
    category: "featured"
  }
];

const electricCarsData = [
  {
    name: "Tata Nexon EV",
    price: "₹15 Lakh",
    fuel: "Electric",
    range: "312 km",
    seats: 5,
    brand: "Tata",
    image: "/src/assets/images/tata_nexon_ev.png",
    detailImage: "/src/assets/images/tata_nexon_ev.png",
    engine: "Electric Motor",
    power: "127 BHP",
    torque: "245 Nm",
    transmission: "Automatic",
    topSpeed: "120 km/h",
    bodyType: "Compact SUV",
    category: "electric"
  },
  {
    name: "MG ZS EV",
    price: "₹22 Lakh",
    fuel: "Electric",
    range: "461 km",
    seats: 5,
    brand: "MG",
    image: "/src/assets/images/mg_zs_ev.png",
    detailImage: "/src/assets/images/mg_zs_ev.png",
    engine: "Electric Motor",
    power: "174 BHP",
    torque: "280 Nm",
    transmission: "Automatic",
    topSpeed: "140 km/h",
    bodyType: "SUV",
    category: "electric"
  },
  {
    name: "Tata Tiago EV",
    price: "₹9 Lakh",
    fuel: "Electric",
    range: "315 km",
    seats: 5,
    brand: "Tata",
    image: "/src/assets/images/tata_tiago_ev.png",
    detailImage: "/src/assets/images/tata_tiago_ev.png",
    engine: "Electric Motor",
    power: "74 BHP",
    torque: "114 Nm",
    transmission: "Automatic",
    topSpeed: "120 km/h",
    bodyType: "Hatchback",
    category: "electric"
  },
  {
    name: "Hyundai Ioniq 5",
    price: "₹45 Lakh",
    fuel: "Electric",
    range: "631 km",
    seats: 5,
    brand: "Hyundai",
    image: "/src/assets/images/hyundai_ioniq_5.png",
    detailImage: "/src/assets/images/hyundai_ioniq_5.png",
    engine: "Electric Motor",
    power: "214 BHP",
    torque: "350 Nm",
    transmission: "Automatic",
    topSpeed: "185 km/h",
    bodyType: "SUV",
    category: "electric"
  },
  {
    name: "BYD Atto 3",
    price: "₹34 Lakh",
    fuel: "Electric",
    range: "521 km",
    seats: 5,
    brand: "BYD",
    image: "/src/assets/images/byd_atto_3.png",
    detailImage: "/src/assets/images/byd_atto_3.png",
    engine: "Electric Motor",
    power: "201 BHP",
    torque: "310 Nm",
    transmission: "Automatic",
    topSpeed: "160 km/h",
    bodyType: "SUV",
    category: "electric"
  },
  {
    name: "Mahindra XEV 9e",
    price: "₹22 Lakh",
    fuel: "Electric",
    range: "542 km",
    seats: 5,
    brand: "Mahindra",
    image: "/src/assets/images/mahindra_xev_9e.png",
    detailImage: "/src/assets/images/mahindra_xev_9e.png",
    engine: "Electric Motor",
    power: "228 BHP",
    torque: "380 Nm",
    transmission: "Automatic",
    topSpeed: "200 km/h",
    bodyType: "SUV",
    category: "electric"
  }
];

const luxuryCarsData = [
  {
    name: "Mercedes-Benz C-Class",
    price: "₹57 Lakh",
    fuel: "Petrol",
    seats: 5,
    brand: "Mercedes-Benz",
    image: "/src/assets/images/mercedes_c_class.webp",
    detailImage: "/src/assets/images/mercedes_c_class.webp",
    engine: "1496 cc Mild Hybrid",
    power: "201 BHP",
    torque: "300 Nm",
    transmission: "9-Speed Auto",
    mileage: "16.9 km/l",
    topSpeed: "246 km/h",
    bodyType: "Sedan",
    category: "luxury"
  },
  {
    name: "Audi A4",
    price: "₹46 Lakh",
    fuel: "Petrol",
    seats: 5,
    brand: "Audi",
    image: "/src/assets/images/audi_a4.webp",
    detailImage: "/src/assets/images/audi_a4.webp",
    engine: "1998 cc Turbo Petrol",
    power: "187 BHP",
    torque: "320 Nm",
    transmission: "7-Speed DCT",
    mileage: "17.4 km/l",
    topSpeed: "241 km/h",
    bodyType: "Sedan",
    category: "luxury"
  },
  {
    name: "BMW 3 Series",
    price: "₹50 Lakh",
    fuel: "Petrol",
    seats: 5,
    brand: "BMW",
    image: "/src/assets/images/bmw_3_series.webp",
    detailImage: "/src/assets/images/bmw_3_series.webp",
    engine: "1998 cc TwinPower Turbo",
    power: "254 BHP",
    torque: "400 Nm",
    transmission: "8-Speed Steptronic",
    mileage: "15.3 km/l",
    topSpeed: "250 km/h",
    bodyType: "Sedan",
    category: "luxury"
  },
  {
    name: "Volvo XC40",
    price: "₹46 Lakh",
    fuel: "Petrol",
    seats: 5,
    brand: "Volvo",
    image: "/src/assets/images/volvo_xc40.webp",
    detailImage: "/src/assets/images/volvo_xc40.webp",
    engine: "1969 cc Mild Hybrid",
    power: "197 BHP",
    torque: "300 Nm",
    transmission: "8-Speed Auto",
    mileage: "15 km/l",
    topSpeed: "180 km/h",
    bodyType: "SUV",
    category: "luxury"
  },
  {
    name: "Jaguar F-Pace",
    price: "₹75 Lakh",
    fuel: "Diesel",
    seats: 5,
    brand: "Jaguar",
    image: "/src/assets/images/jaguar_f_pace.webp",
    detailImage: "/src/assets/images/jaguar_f_pace.webp",
    engine: "1997 cc Diesel",
    power: "201 BHP",
    torque: "430 Nm",
    transmission: "8-Speed Auto",
    mileage: "19.3 km/l",
    topSpeed: "210 km/h",
    bodyType: "SUV",
    category: "luxury"
  },
  {
    name: "Land Rover Defender",
    price: "₹95 Lakh",
    fuel: "Diesel",
    seats: 7,
    brand: "Land Rover",
    image: "/src/assets/images/land_rover_defender.webp",
    detailImage: "/src/assets/images/land_rover_defender.webp",
    engine: "2996 cc Diesel",
    power: "296 BHP",
    torque: "650 Nm",
    transmission: "8-Speed Auto",
    mileage: "11.5 km/l",
    topSpeed: "191 km/h",
    bodyType: "SUV",
    category: "luxury"
  }
];

const seedDB = async () => {
  try {
    // If not already connected, connect (useful if run stand-alone)
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/wheelfinder');
      console.log('Connected to MongoDB in seed script');
    }

    await Car.deleteMany({});
    console.log('Cleared existing cars');

    const allCars = [...featuredCarsData, ...electricCarsData, ...luxuryCarsData];
    await Car.insertMany(allCars);
    console.log('Successfully seeded database with cars');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

module.exports = { seedDB };
