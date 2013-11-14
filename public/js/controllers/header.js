angular.module('events.common')
.controller('HeaderController', ['$scope', '$routeParams', '$location', 'Global', function ($scope, $routeParams, $location, Global) {
	$scope.global = Global;
	$scope.menu = [{
	    title: 'All',
	    link: 'events'
	}];
	$scope.isCollapsed = false;
}]);