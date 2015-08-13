var proverb=angular.module("proverb",["ui.router","components","angular-gestures"]);proverb.config(["$stateProvider","$urlRouterProvider","hammerDefaultOptsProvider",function(t,e,a){e.otherwise("/quote"),t.state("quote",{url:"/quote",templateUrl:"views/quotes.html",controller:"quoteCtrl"}),a.set({recognizers:[[Hammer.Pan,{time:0}]]})}]),angular.module("proverb").controller("quoteCtrl",["$scope","quoteService","$timeout",function(t,e,a){e.getQuotes().then(function(e){t.proverbs=e});var r,s,p,l,n;t.display=0,t.nextItem=function(t){l="next";var e=t.deltaX;p=angular.element(document.querySelector(".prev-item")),r=angular.element(t.target),s=r.next();var a=(r[0].clientWidth/2-Math.abs(e))/(r[0].clientWidth/2);a=a>1?1:a;var o=1+a;n=a;var x=r[0].clientWidth+e,d=e-r[0].clientWidth;r.removeClass("stopped").attr("style","-webkit-transform: translate3d("+e+"px,0px, 0px) scale("+a+");-moz-transform:    translate3d("+e+"px,0px, 0px) scale("+a+");-ms-transform:     translate3d("+e+"px,0px, 0px) scale("+a+");-o-transform:      translate3d("+e+"px,0px, 0px) scale("+a+");transform:   		translate3d("+e+"px,0px, 0px) scale("+a+");"),s.removeClass("stopped").attr("style","-webkit-transform: translate3d("+x+"px,0px, 0px) scale("+o+");-moz-transform:    translate3d("+x+"px,0px, 0px) scale("+o+");-ms-transform:     translate3d("+x+"px,0px, 0px) scale("+o+");-o-transform:      translate3d("+x+"px,0px, 0px) scale("+o+");transform:   		translate3d("+x+"px,0px, 0px) scale("+o+");"),p.removeClass("stopped").attr("style","-webkit-transform: translate3d("+d+"px,0px, 0px) scale(1);-moz-transform:    translate3d("+d+"px,0px, 0px) scale(1);-ms-transform:     translate3d("+d+"px,0px, 0px) scale(1);-o-transform:      translate3d("+d+"px,0px, 0px) scale(1);transform:   		translate3d("+d+"px,0px, 0px) scale(1);")},t.prevItem=function(t){l="prev";var e=t.deltaX;r=angular.element(t.target),p=angular.element(document.querySelector(".prev-item"));var a=(r[0].clientWidth/2-Math.abs(e))/(r[0].clientWidth/2);a=a>1?1:a;var o=1+a;n=a;var x=r[0].clientWidth+e,d=e-r[0].clientWidth;r.removeClass("stopped").attr("style","-webkit-transform: translate3d("+e+"px,0px, 0px) scale("+a+");-moz-transform:    translate3d("+e+"px,0px, 0px) scale("+a+");-ms-transform:     translate3d("+e+"px,0px, 0px) scale("+a+");-o-transform:      translate3d("+e+"px,0px, 0px) scale("+a+");transform:   		translate3d("+e+"px,0px, 0px) scale("+a+");"),s.removeClass("stopped").attr("style","-webkit-transform: translate3d("+x+"px,0px, 0px) scale(1);-moz-transform:    translate3d("+x+"px,0px, 0px) scale(1);-ms-transform:     translate3d("+x+"px,0px, 0px) scale(1);-o-transform:      translate3d("+x+"px,0px, 0px) scale(1);transform:   		translate3d("+x+"px,0px, 0px) scale(1);"),p.removeClass("stopped").attr("style","-webkit-transform: translate3d("+d+"px,0px, 0px) scale("+o+");-moz-transform:    translate3d("+d+"px,0px, 0px) scale("+o+");-ms-transform:     translate3d("+d+"px,0px, 0px) scale("+o+");-o-transform:      translate3d("+d+"px,0px, 0px) scale("+o+");transform:   		translate3d("+d+"px,0px, 0px) scale("+o+");")},t.stop=function(e){a(function(){t.display="prev"===l?t.display-=1:t.display+=1,"prev"===l?(p.addClass("current").addClass("stopped").removeClass("prev").attr("style",""),r.addClass("next").addClass("stopped").removeClass("current").attr("style","")):(s.addClass("current").addClass("stopped").removeClass("next").attr("style",""),r.addClass("prev").addClass("stopped").removeClass("next").removeClass("current").attr("style",""))})}}]),angular.module("proverb").service("quoteService",["$http",function(t){this.getQuotes=function(){return t.get("data/proverbs.json").then(function(t){return t.data})}}]);