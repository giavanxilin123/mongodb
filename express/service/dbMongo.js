const mongoose = require("mongoose");
const config = require("../config");

mongoose.connect(config.DB_CONNECT, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
});
var db = mongoose.connection;

if (!db) console.error("Error connecting db");
else console.log("MongoDb connected successfully");
