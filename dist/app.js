var proverb=angular.module("proverb",["ui.router","components","ngAnimate","ngTouch","angular-carousel"]);proverb.config(["$stateProvider","$urlRouterProvider",function(e,o){o.otherwise("/quote"),e.state("quote",{url:"/quote",templateUrl:"views/quotes.html",controller:"quoteCtrl"})}]),angular.module("proverb").controller("quoteCtrl",["$scope","quoteService",function(e,o){var r;o.getQuotes().then(function(o){r=o.slice(),e.proverbs=r.splice(0,3)}),e.left=function(){e.proverbs.push(r.splice(0,1)[0]),console.log(e.proverbs)},e.right=function(){console.log("left")}}]),angular.module("proverb").service("quoteService",["$http",function(e){this.getQuotes=function(){return e.get("data/proverbs.json").then(function(e){return e.data})}}]);