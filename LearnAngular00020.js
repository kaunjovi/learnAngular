angular.module('MyModule', [])
	.controller("MyController", ["$scope", function($scope){
		$scope.HelloWorldMessage = "Hello master." ; 
	}]) ;