angular.module('shoppingServices', [])

.factory('Product', function($http){
	var shoppingFactory = {};

	// Get all the product items from database
    shoppingFactory.getProducts = function() {
        return $http.get('/api/product/');
    };

    // Get all products list
    shoppingFactory.getProductLists = function() {
        return $http.get('api/products/');
    };

    //Get editable product items
    shoppingFactory.editProduct = function(id) {
        return $http.get('api/editproduct/' + id);
    };

    return shoppingFactory; // Return shoppingFactory object
});