angular.module("r-swipe", ["ngTouch"])

	.directive("rSwipe", ["$swipe", function($swipe) {
		return {
			restrict: "A",
			link: function(scope, el, attr) {
				$swipe.bind(el, {
					start: swipeStart,
					move: swipeMove,
					end: swipeEnd
				});
				var deltaX;
				function swipeEnd(evt) {
					console.log(evt);
				}
				function swipeStart(evt) {
					deltaX = evt.x;

				}
				function swipeMove(evt) {
					var delta = evt.x;
					delta = delta - deltaX || 0;
					angular.element(el.find("div")[0]).attr("style", "transform: translate("+ delta+"px, 0)");

					console.log(evt);
				}
			}
		}

	}]);