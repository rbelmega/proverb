var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');



var src = [
	"bower_components/angular/angular.min.js",
	"bower_components/angular-ui-router/release/angular-ui-router.min.js",
	"bower_components/angular-animate/angular-animate.min.js",
	"bower_components/angular-touch/angular-touch.min.js",
	"bower_components/angular-carousel/dist/angular-carousel.min.js"
];

gulp.task('default', ["compress", "html", "css", "img", "js", "components", "views", "coponentsView", "json"], function() {
	// place code for your default task here
});

gulp.task("html", function(){
	return gulp.src("src/*.html")
		.pipe(gulp.dest('dist/'));
});

gulp.task("json", function(){
	return gulp.src("src/data/*.json")
		.pipe(gulp.dest('dist/data/'));
});

gulp.task("views", function(){
	return gulp.src("src/views/*.html")
		.pipe(gulp.dest('dist/views/'));
});

gulp.task("coponentsView", function(){
	return gulp.src("src/components/**/*.html")
		.pipe(gulp.dest('dist/components/'));
});

gulp.task("js", function(){
	return gulp.src(["src/*.js", "src/controllers/**/*.js", "src/services/**/*.js"])
		.pipe(concat('app.js'))
		//.pipe(uglify())
		.pipe(gulp.dest('dist/'));
});

gulp.task("components", function(){
	return gulp.src("src/components/**/*.js")
		.pipe(concat('components.js'))
		//.pipe(uglify())
		.pipe(gulp.dest('dist/'));
});

gulp.task("img", function(){
	return gulp.src("src/img/*")
		.pipe(gulp.dest('dist/img'));
});

gulp.task("css", function(){
	return gulp.src("src/css/*")
		.pipe(concat('style.css'))
		.pipe(gulp.dest('dist/css/'));
});

gulp.task('compress', function() {
	return gulp.src(src)
		.pipe(concat('vendor.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/vendor'));
});