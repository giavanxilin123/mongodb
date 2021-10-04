var mongoose = require("mongoose");

var userSchema = mongoose.Schema(
	{
		id: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
		},
		name: {
			type: String,
		},
		address: {
			type: String,
		},
		dob: {
			type: Date,
		},
		phone: {
			type: Number,
		},
		role: {
			type: String,
		},
	},
	{
		toJSON: {
			transform: function (doc, ret) {
				ret.id = ret._id;
				delete ret._id;
				delete ret.__v;
			},
		},
	}
);

module.exports = userModel = mongoose.model("user", userSchema);
