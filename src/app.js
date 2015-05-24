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