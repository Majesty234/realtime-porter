angular.module('shoppingCtrl', [])

.controller('productCtrl', function(Product){
	var app = this;

	app.loading = true;
	app.errorMsg = false;

	function getProducts() {
		Product.getProducts().then(function(data) {
			if (data.data.success) {
				app.items = data.data.items;
				app.loading = false;

			} else {
				//app.errorMsg = items.data.message;
				console.log('error occur...');
				app.loading = false;
			}
		});
	}
	getProducts();
});
