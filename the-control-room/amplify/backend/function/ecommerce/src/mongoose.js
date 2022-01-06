const mongoose = require("mongoose");

const uri = process.env.MONGODB_URL;

let connection;

const connect = async () => {
  try {
    connection = await mongoose.createConnection(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return connection;
  } catch (e) {
    console.error("Could not connect to MongoDB...");
    throw e;
  }
};

function getConnection() {
  return connection;
}

module.exports = { connect, getConnection };
