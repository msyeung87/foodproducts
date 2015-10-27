var myApp = angular.module('myApp', ['ngRoute']);

myApp.filter('capitalizefirst', function() {
  'use strict'
   return function(token) {
      return token.charAt(0).toUpperCase() + token.slice(1);
   }
});

myApp.config(function ($routeProvider)
{
  $routeProvider
  	.when('/about', {
    	controller: 'AboutController',
    	templateUrl: 'about.html'
 	})
  	.when('/home', {
  		controller: 'HomeController',
  		templateUrl: 'home.html'
  	})
  	.otherwise({
    	redirectTo: '/home'
 	 });
});

myApp.controller('MainController', ['$scope', '$http', function($scope, $http){
	
}]);