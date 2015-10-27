var myApp = angular.module('myApp', ['ngRoute']);

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

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http){
	// console.log("hello from controller");

	// var refresh = function(){
	// 	$http.get('/productlist').success(function(response){
	// 		console.log("i got the data i requested");
	// 		$scope.productlist = response;
	// 		$scope.product = '';

	// 		var totals = 0;
	// 		var amount = $scope.productlist;
	// 		for(i = 0; i < amount.length; i++){
	// 			var total = parseInt(amount[i].quantity) * parseInt(amount[i].price)
	// 			totals += total;
	// 		};
	// 		$scope.totalamount = totals
	// 	});
	// };

	// refresh();

	// $scope.addProduct = function(){
	// 	console.log($scope.product)
	// 	$http.post('/productlist', $scope.product).success(function(response){
	// 		console.log(response);
	// 		refresh();
	// 	});
	// };

	// $scope.remove = function(id){
	// 	console.log(id);
	// 	$http.delete('/productlist/' + id).success(function(response){
	// 	refresh();
	// 	});
	// };

	// $scope.edit = function(id){
	// 	console.log(id);
	// 	$http.get('/productlist/' + id).success(function(response){
	// 		$scope.product = response;
	// 	});
	// };

	// $scope.update = function(){
	// 	$http.put('/productlist/' + $scope.product._id, $scope.product).success(function(response){
	// 		refresh();
	// 	});
	// };

	// $scope.clear = function(){
	// 	$scope.product = '';
	// };


}]);