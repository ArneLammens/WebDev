'use strict';

/* Controllers */

angular.module('Scriptie.controller', [])

        .controller('CommonCtrl', ['$scope', 'RestService', '$location', function($scope, RestService, $location) {

                //Variables
                $scope.user = {};
                $scope.logindata = {};
                $scope.loginshow = false;
                $scope.createAccount = {};



                $scope.logout = function()
                {
                    $scope.loginshow = false;
                    $location.path("/home");

                };

                $scope.redirectlogin = function()
                {
                    $location.path("/login");
                };

                $scope.login = function(email, password)
                {

                    RestService.user().login({par1: email, par2: password},
                    function(data, headers) {
                        $scope.user = data;
                        $scope.loginshow = true;
                        $location.path("/home");

                    },
                            function(data, headers)
                            {
                                alert("something went wrong");
                            }
                    );
                };

                $scope.redirectCreateAccount = function()
                {
                    $location.path("/createAccount");
                };
                $scope.redirectProfile = function()
                {
                    $location.path("/profile");
                };



            }])
        .controller('HomeCtrl', ['$scope', '$location', function($scope, $location)
            {
                $scope.redirectProduct = function()
                {
                    $location.path("/products");
                };


            }])
        .controller('loginCtrl', ['$scope', '$location', function($scope, $location)
            {
                $scope.redirect = function()
                {
                    $location.path('/account');
                };

            }])
        .controller('createAccountCtrl', ['$scope', '$location', 'RestService', function($scope, $location, RestService)
            {
                $scope.redirectHome = function()
                {
                    $location.path("/home");
                };
                $scope.createaccount = function()
                {
                    RestService.user().createAccount($scope.createAccount,
                            function(data, headers) {
                                
                                $scope.user = data;
                                $scope.loginshow = true;
                                $location.path("/home");

                            },
                            function(data, headers)
                            {
                                alert("something went wrong");
                            }
                    );
                };

            }])
        .controller('profileCtrl', ['$scope', '$location', 'RestService', function($scope, $location, RestService)
            {
                $scope.redirectHome = function()
                {
                    $location.path("/home");
                };
                $scope.modifyAccount = function()
                {
                    RestService.user().modifyAccount({par1: $scope.user.id}, $scope.user,
                            function(data, headers) {
                                $scope.user = data;
                                $scope.loginshow = true;
                                $location.path("/home");

                            },
                            function(data, headers)
                            {
                                alert("something went wrong");
                            }
                    );
                };

            }])
        .controller('productsCtrl', ['$scope', 'RestService','$location', function($scope, RestService,$location) {

                //Variables
                $scope.products = [];

           
                
                RestService.product().getAllProducts(
                        function(data, headers) {
                            $scope.products = data;

                        },
                        function(data, headers)
                        {
                            alert("something went wrong");
                        }
                );
                $scope.redirectCreateProduct=function()
                {
                 $location.path("/createProduct");
                };
            




            }])
           .controller('createProductCtrl', ['$scope', 'RestService','$location', function($scope, RestService,$location) {

                //Variables
                $scope.createProduct = {};
                $scope.createProduct.addBy=$scope.user;
                
                
                
                $scope.CreateProduct=function(){
                RestService.product().createProduct($scope.createProduct,
                        function(data, headers) {
                            $scope.products = data;
                            $location.path("/products")

                        },
                        function(data, headers)
                        {
                            alert("something went wrong");
                        }
                );
                }
                $scope.redirect = function()
                {
                    $location.path('/products');
                };






            }])
        
        .controller('productCtrl', ['$scope', 'RestService', '$routeParams', '$location', function($scope, RestService, $routeParams, $location) {

                //Variables
                $scope.product = {};


                RestService.product().getAProduct({id: $routeParams.id},
                function(data, headers) {
                    $scope.product = data;

                },
                        function(data, headers)
                        {
                            alert("something went wrong");
                        }
                );



                $scope.removeProduct = function(id)
                {
                    RestService.product().removeProduct({id: id},
                    function(data, headers) {
                        $location.path("/products");

                    },
                            function(data, headers)
                            {
                                alert("something went wrong");
                            }
                    );

                }




            }]);




        