const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/storeLocator', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log(`MongoDB Connected To ${conn.connection.host} on port ${conn.connection.port}`);
  } catch (error) {
    //console.error(error);
    console.log("Error Connect DB");
    process.exit(1);
  }
};

module.exports = connectDB;

