const mongoose = require("mongoose");

// Do this mongoose.connect() inside an async function because it returns a Promise
// and we want to use await to ensure the database connection is established before proceeding.
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected Successfully");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;

// Here we are only writing the function and we are connecting the db in the app.js file 
// We could have also done the calling in this file only, and just need to do require() in the app.js to call the whole page there.(But not the best way to do.)
// We need to make sure that the app.listen should only be done after the DB is established.
