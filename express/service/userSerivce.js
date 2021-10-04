var userModel = require("./mongoModel/userModel");
module.exports = {
	newUser,
	updateAddress,
	query,
	findById,
};

function updateAddress(id, address) {
	userModel.updateOne(
		{
			_id: id,
		},
		{
			$set: {
				address: address,
			},
		},
		function (err) {
			if (err) {
				console.error(err);
			}
		}
	);
}

function newUser(id, name, callback) {
	var user_model = new userModel();
	user_model.id = id;
	user_model.name = name;
	user_model.save(function (err, obj) {
		callback(err, obj);
	});
}

function query(query, callback) {
	userModel.find(
		{
			$or: [
				{
					id: query,
				},
				{
					address: query,
				},
				{
					name: new RegExp(query, "i"),
				},
			],
		},
		function (err, obj) {
			callback(err, obj);
		}
	);
}

function findById(id, callback) {
	userModel.findOne(
		{
			_id: id,
		},
		function (err, obj) {
			callback(err, obj);
		}
	);
}
