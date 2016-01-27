var gulp = require('gulp');
var serve = require('gulp-serve');
var vulcanize = require('gulp-vulcanize');

gulp.task('vulcanize', ['vulcanize-dashboard-1', 'vulcanize-index', 'vulcanize-elements'], function(){
	
})

gulp.task('vulcanize-layouts', function(){
	// no vulcanize, just copy all folders/files under layouts
	return gulp.src('app/layouts/dashboards/')
	.pipe(vulcanize({
		excludes:['app/elements/index.html',
			'app/components/*/*.*',
		]
	}))
	.pipe(gulp.dest('dist/layouts/'))
})

// gulp.task('vulcanize-dashboard-1', function(){
// 	return gulp.src('app/layouts/dashboards/dashboard-1.html')
// 	.pipe(vulcanize({
// 		abspath: '',
// 		excludes: ['app/elements/index.html']
// 	}))
// 	.pipe(gulp.dest('dist/layouts/dashboards/'))
// })

gulp.task('vulcanize-index', function(){
	// no vulcanize for root index.html
	return gulp.src('app/index.html')
	.pipe(gulp.dest('dist/'))
})

gulp.task('vulcanize-elements', function(){
	return gulp.src('app/elements/index.html')
	.pipe(vulcanize({
	}))
	.pipe(gulp.dest('dist/elements/'))
})

gulp.task('serve', serve('app'))