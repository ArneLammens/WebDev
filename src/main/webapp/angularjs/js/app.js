'use strict';


// Declare app level module which depends on filters, and services
angular.module('Scriptie',
        ['Scriptie.service',
            'Scriptie.controller',
            'Scriptie.filters',
            'ngRoute'


        ]).
        config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

                $routeProvider.when('/home', {templateUrl: 'angularjs/partials/home.html', controller: 'HomeCtrl'});
                $routeProvider.when('/products', {templateUrl: 'angularjs/partials/listProducts.html', controller: 'productsCtrl'});
                $routeProvider.when('/products/:id', {templateUrl: 'angularjs/partials/detailProduct.html', controller: 'productCtrl'});
                $routeProvider.when('/login', {templateUrl: 'angularjs/partials/login.html', controller: 'loginCtrl'});
                $routeProvider.when('/createAccount', {templateUrl: 'angularjs/partials/createAccount.html', controller: 'createAccountCtrl'});
                $routeProvider.when('/createProduct', {templateUrl: 'angularjs/partials/createProduct.html', controller: 'createProductCtrl'});
                $routeProvider.when('/profile', {templateUrl: 'angularjs/partials/profile.html', controller: 'profileCtrl'});
                $routeProvider.otherwise({redirectTo: '/home'});




            }]);


