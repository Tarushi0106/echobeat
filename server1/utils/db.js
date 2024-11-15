const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI;

// mongoose.connect(URI);
const connectDB = async()=>{
    try{
await mongoose.connect(URI);
console.log("DATABASE CONNECTION SUCCESSFULL");
    }
    catch(error){
        console.error("DATABASE CONNECTION FAIL");
        process.exit(0);
    }
}
module.exports = connectDB;


