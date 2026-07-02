const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  fuel: { type: String, required: true },
  seats: { type: Number, required: true },
  brand: { type: String, required: true },
  category: { type: String, enum: ['featured', 'electric', 'luxury'], required: true },
  image: { type: String, required: true },
  detailImage: { type: String, required: true },
  engine: { type: String },
  power: { type: String },
  torque: { type: String },
  transmission: { type: String },
  mileage: { type: String },
  topSpeed: { type: String },
  bodyType: { type: String },
  range: { type: String },
});

module.exports = mongoose.model('Car', carSchema);
