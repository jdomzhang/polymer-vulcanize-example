var gulp = require('gulp');
var serve = require('gulp-serve');
var vulcanize = require('gulp-vulcanize');

gulp.task('vulcanize', ['vulcanize-index'
	, 'vulcanize-components', 'vulcanize-elements', 'vulcanize-layouts'
	, 'vulcanize-copy-webcomponent'
	, 'vulcanize-copy-polymer'
	]
	, function(){
})

gulp.task('vulcanize-layouts', function(){
	// no vulcanize, just copy all folders/files under layouts
	return gulp.src('app/layouts/**/*.*')
	.pipe(gulp.dest('dist/layouts'))
})


gulp.task('vulcanize-index', function(){
	// no vulcanize for root index.html
	return gulp.src('app/index.html')
	// .pipe(vulcanize({
	// 	excludes: ['app/layouts/index.html']
	// }))
	.pipe(gulp.dest('dist/'))
})

gulp.task('vulcanize-copy-webcomponent', function(){
	return gulp.src('app/bower_components/webcomponentsjs/webcomponents-lite.min.js')
		.pipe(gulp.dest('dist/bower_components/webcomponentsjs/'))
})

gulp.task('vulcanize-copy-polymer', function(){
	return gulp.src('app/bower_components/polymer/*.html')
		.pipe(gulp.dest('dist/bower_components/polymer/'))
})

gulp.task('vulcanize-elements', function(){
	return gulp.src('app/elements/**/index.html')
	.pipe(vulcanize({
		excludes: ['app/components/index.html']
	}))
	.pipe(gulp.dest('dist/elements/'))
})

gulp.task('vulcanize-components', function(){
	return gulp.src('app/components/index.html')
	.pipe(vulcanize({
	}))
	.pipe(gulp.dest('dist/components/'))
})

gulp.task('serve', serve('app'))

gulp.task('serve:dist', serve('dist'))