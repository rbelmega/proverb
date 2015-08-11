var proverb = angular.module("proverb", ["ui.router", "components", 'angular-gestures']);


proverb.config(["$stateProvider", "$urlRouterProvider", "hammerDefaultOptsProvider",
	function($stateProvider, $urlRouterProvider, hammerDefaultOptsProvider) {
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
		});
	hammerDefaultOptsProvider.set({
		recognizers: [
			[Hammer.Pan, {time: 0}]
		]
	});
}]);