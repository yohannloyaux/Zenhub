var zenhubApp = angular.module('zenhubApp', []);

zenhubApp.controller('ZenhubController', ['$scope', '$http',
	function ($scope, $http) {
		$http.get('https://api.github.com/zen').success(function(data) {
			$scope.github_quote = data;
		});
	}
]);