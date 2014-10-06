'use strict';

/* Services */

var scriptieService = angular.module('Scriptie.service', ['ngResource']);

scriptieService.value('version', '0.1');

scriptieService.factory('RestService', ['$resource', function($resource) {

        return {
            product: function() {

                return $resource('http://localhost:8080/Scriptie/webresources/product/:id', {}, {
                    getAllProducts: {method: 'GET', params: {}, isArray: true},
                    getAProduct: {method: 'GET', params: {id: "id"}, isArray: false},
                    removeProduct: {method: 'DELETE', params: {id: 'id'}, isArray: false},
                    createProduct: {method: 'POST', params: {}, isArray: false}

                });
            },
            user: function() {
                return $resource('http://localhost:8080/Scriptie/webresources/user/:par1/:par2', {}, {
                    login: {method: 'GET', params: {par1: 'email', par2: "password"}, isArray: false},
                    createAccount: {method: 'POST', data: {}, params: {}, isArray: false},
                    modifyAccount: {method: 'PUT', data: {}, params: {par1: 'id'}, isArray: false}


                });
            }


        };

    }]);


