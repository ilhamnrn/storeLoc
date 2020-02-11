const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log(`MongoDB Connected Gan`);
  } catch (error) {
    //console.error(error);
    console.log("Error Connect DB");
    process.exit(1);
  }
};

module.exports = connectDB;

