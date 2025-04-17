const mongoose = require("mongoose");
const url  = process.env.DATABASE_URL;
const connectDB = async ()=>{
   await mongoose.connect(url);
}
module.exports = connectDB