'use strict';
exports.list_all_products = function(req, res) {
	console.log(req.query);
	res.json(req.query);
};
exports.create_a_product = function(req, res) {
	console.log(req.body);
	res.json(req.body)
};
exports.update_a_product = function(req, res) {
	console.log(req.params);
	res.json(req.params);
};
exports.delete_a_product = function(req, res) {
};

exports.test_mysql = function(req, res, next) {
	res.locals.connection.query('SELECT * from users', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
};