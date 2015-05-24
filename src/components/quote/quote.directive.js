angular.module("quote", [])
	.directive("rQuote", function() {
		return {
			restrict: "E",
			scope: {
				textUkr: "@",
				textEng: "@",
				renderIndex: "@",
				carouselIndex: "@"
			},
			templateUrl: "components/quote/quote.html",
			link: function(){
			}
		}

	});