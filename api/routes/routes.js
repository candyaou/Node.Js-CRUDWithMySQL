'use strict';
module.exports = function(app) {
	var route = require('../controllers/controller');
	// route Routes
	app.route('/products')
	.get(route.list_all_products)
	.post(route.create_a_product);
	app.route('/products/:productId')
	.put(route.update_a_product)
	.delete(route.delete_a_product);
};