'use strict';

var crudApp = angular.module( 'crudApp' , [
  'ngRoute',
  'crudControllers',
  'crudService'
]);

crudApp.config(['$routeProvider',
  function($routeProvider){
    
    $routeProvider.
      when('/contacts', { 
        templateUrl : 'partials/contacts.html',
        controller  : 'crudController'
      })
      .otherwise({
        redirectTo : '/contacts'
      });
    
  }
]);
