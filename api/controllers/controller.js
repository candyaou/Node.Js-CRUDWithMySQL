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