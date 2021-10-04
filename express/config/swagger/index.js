const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const basicDocs = require("./docs");
const userDocs = require("./docs/user");

const docs = {
	...basicDocs,
	...userDocs,
};

module.exports = function (app, prefix) {
	prefix = prefix || "";
	var options = {
		swaggerDefinition: {
			info: {
				title: "Express API",
				version: "1.0.0",
			},
		},
		apis: [
			path.resolve(__dirname, "../../api/*.route.js"),
			path.resolve(__dirname, "../../api/*.yaml"),
		],
	};

	var swaggerSpec = swaggerJSDoc(options);
	app.get(prefix + "/api-docs.json", function (req, res) {
		res.setHeader("Content-Type", "application/json");
		(swaggerSpec.securityDefinitions = {
			bearerAuth: {
				type: "apiKey",
				in: "header",
				name: "Authorization",
			},
		}),
			(swaggerSpec.security = [
				{
					bearerAuth: [],
				},
			]);

		res.send(swaggerSpec);
	});

	options = {
		swaggerUrl: prefix + "/api-docs.json",
		showExplorer: true,
	};

	app.use(
		prefix + "/api-docs",
		swaggerUi.serve,
		swaggerUi.setup(docs, options)
	);
};
