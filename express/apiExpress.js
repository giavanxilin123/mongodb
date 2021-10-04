import { userController, userRoute } from "./api";
const cors = require("cors");

const express = require("express"),
	app = express(),
	port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
	cors({
		origin: "*",
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	})
);
const router = express.Router();

router.get("/health", (req, res) => res.send("OK!"));
require("./config/swagger")(router, "/web");
app.use("/", router);

var userCtl = new userController();
var userRoute1 = userRoute(express.Router(), app, userCtl);
app.use("/user", userRoute1);

app.listen(port, () => console.log("Server started on: " + port));
