var proverb = angular.module("proverb", ["ui.router", "components", 'ngAnimate', 'ngTouch', "angular-carousel"]);


proverb.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
	//
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise("/quote");
	//
	// Now set up the states
	$stateProvider
		.state('quote', {
			url: "/quote",
			templateUrl: "views/quotes.html",
			controller: "quoteCtrl"
		})
}]);
angular.module("proverb")
	.controller("quoteCtrl", ["$scope", "quoteService", "$swipe", function($scope, quoteService, $swipe) {

		quoteService.getQuotes().then(function(data) {
			$scope.proverbs = data;
		});

	}]);
angular.module("proverb")

.service("quoteService", ["$http", function($http){

		this.getQuotes = function(){

			return $http.get("data/proverbs.json").then(function(data){
				return data.data;
			})
		};

	}]);