const get = {
	get: {
		tags: ["Todo CRUD operations"], // operation's tag.
		description: "Get a todo", // operation's desc.
		operationId: "getTodo", // unique operation id
		parameters: [
			// expected params.
			{
				name: "id", // name of the param
				in: "path", // location of the param
				schema: {
					$ref: "#/components/schemas/id", // data model of the param
				},
				required: true, // Mandatory param
				description: "A single todo id", // param desc.
			},
		],
		// expected responses
		responses: {
			// response code
			200: {
				description: "Todo is obtained", // response desc.
				content: {
					// content-type
					"application/json": {
						schema: {
							$ref: "#/components/schemas/Todo", // todo data model
						},
					},
				},
			},
			// response code
			404: {
				description: "Todo is not found", // response desc.
				content: {
					// content-type
					"application/json": {
						schema: {
							$ref: "#/components/schemas/Error", // error data model
						},
					},
				},
			},
		},
	},
};
const post = {
	post: {
		tags: ["Todo CRUD operations"], // operation's tag
		description: "Create todo", // short desc
		operationId: "createTodo", // unique operation id
		parameters: [], // expected params
		requestBody: {
			// expected request body
			content: {
				// content-type
				"application/json": {
					schema: {
						$ref: "#/components/schemas/TodoInput", // todo input data model
					},
				},
			},
		},
		// expected responses
		responses: {
			// response code
			201: {
				description: "Todo created successfully", // response desc
			},
			// response code
			500: {
				description: "Server error", // response desc
			},
		},
	},
};
const put = {
	put: {
		tags: ["Todo CRUD operations"], // operation's tag
		description: "Update todo", // short desc
		operationId: "updateTodo", // unique operation id
		parameters: [
			// expected params
			{
				name: "id", // name of param
				in: "path", // location of param
				schema: {
					$ref: "#/components/schemas/id", // id model
				},
				required: true, // mandatory
				description: "Id of todo to be updated", // short desc.
			},
		],
		// expected responses
		responses: {
			// response code
			200: {
				description: "Todo updated successfully", // response desc.
			},
			// response code
			404: {
				description: "Todo not found", // response desc.
			},
			// response code
			500: {
				description: "Server error", // response desc.
			},
		},
	},
};
const del = {
	delete: {
		tags: ["Todo CRUD operations"], // operation's tag
		description: "Deleting a todo", // short desc
		operationId: "deleteTodo", // unique operation id
		parameters: [
			// expected parameters
			{
				name: "id", // name of param
				in: "path", // location of param
				schema: {
					$ref: "#/components/schemas/id", // id model
				},
				required: true, // mandatory
				description: "Deleting a done todo", // param desc
			},
		],
		// expected responses
		responses: {
			// response code
			200: {
				description: "Todo deleted successfully", // response desc
			},
			// response code
			404: {
				description: "Todo not found", // response desc
			},
			// response code
			500: {
				description: "Server error", // response desc
			},
		},
	},
};

module.exports = {
	components: {
		schemas: {
			// id model
			id: {
				type: "string", // data type
				description: "An id of a todo", // desc
				example: "tyVgf", // example of an id
			},
			// todo model
			Todo: {
				type: "object", // data type
				properties: {
					id: {
						type: "string", // data-type
						description: "Todo identification number", // desc
						example: "ytyVgh", // example of an id
					},
					title: {
						type: "string", // data-type
						description: "Todo's title", // desc
						example: "Coding in JavaScript", // example of a title
					},
					completed: {
						type: "boolean", // data type
						description: "The status of the todo", // desc
						example: false, // example of a completed value
					},
				},
			},
			// Todo input model
			TodoInput: {
				type: "object", // data type
				properties: {
					title: {
						type: "string", // data type
						description: "Todo's title", // desc
						example: "Coding in JavaScript", // example of a title
					},
					completed: {
						type: "boolean", // data type
						description: "The status of the todo", // desc
						example: false, // example of a completed value
					},
				},
			},
			// error model
			Error: {
				type: "object", //data type
				properties: {
					message: {
						type: "string", // data type
						description: "Error message", // desc
						example: "Not found", // example of an error message
					},
					internal_code: {
						type: "string", // data type
						description: "Error internal code", // desc
						example: "Invalid parameters", // example of an error internal code
					},
				},
			},
		},
	},
	// operation's method
	paths: {
		"/user": {
			...get,
			...post,
			...put,
			...del,
		},
	},
};
