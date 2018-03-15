angular.module('userApp', ['appRoutes', 'userControllers', 'userServices', 'ngAnimate', 'mainController', 'authServices', 'emailController', 'managementController', 'shoppingCtrl', 'shoppingServices'])

.config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptors');
});
