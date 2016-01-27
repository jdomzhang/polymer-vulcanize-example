var gulp = require('gulp');
var serve = require('gulp-serve');
var vulcanize = require('gulp-vulcanize');
var folders = require('gulp-folders')
var indexCreator = require('./utils/indexCreator')

gulp.task('vulcanize', [
	'copy-index', 'copy-scripts', 'copy-webcomponent', 'copy-polymer', 'copy-page'
	, 'vulcanize-components', 'vulcanize-elements', 'vulcanize-layouts'
	])


gulp.task('copy-index', function(){
	// no vulcanize for root index.html
	return gulp.src(['app/index.html', 'app/routing.html'])
	.pipe(gulp.dest('dist/'))
})

gulp.task('copy-scripts', function(){
	// no vulcanize for root index.html
	return gulp.src('app/scripts/*')
	.pipe(gulp.dest('dist/scripts/'))
})

gulp.task('copy-webcomponent', function(){
	return gulp.src('app/bower_components/webcomponentsjs/webcomponents-lite.min.js')
		.pipe(gulp.dest('dist/bower_components/webcomponentsjs/'))
})

gulp.task('copy-polymer', function(){
	return gulp.src('app/bower_components/polymer/*.html')
		.pipe(gulp.dest('dist/bower_components/polymer/'))
})

gulp.task('copy-page', function(){
	return gulp.src('app/bower_components/page/page.js')
		.pipe(gulp.dest('dist/bower_components/page/'))
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


gulp.task('vulcanize-layouts', function(){
	// no vulcanize, just copy all folders/files under layouts
	return gulp.src('app/layouts/**/*.*')
	.pipe(gulp.dest('dist/layouts'))
})

gulp.task('showMessage', function(){
	return console.log('Please launch http://localhost:3000 in browser')
})


//
// generate index.html files
//
gulp.task('generateIndex-components', generateIndex('app/components/'))
gulp.task('generateIndex-elements', generateIndex('app/elements/'))
gulp.task('generateIndex', ['generateIndex-components'
	, 'generateIndex-elements', 'generateIndex-elements-extra'])


function generateIndex(rootFolder) {
	return folders(rootFolder, function(folder){
		var pathPrefix = rootFolder + folder + '/'
		return gulp.src([pathPrefix + '*.html', '!' + pathPrefix + 'index.html'])
		.pipe(indexCreator('.', {removePrefix: pathPrefix}))
		.pipe(gulp.dest(pathPrefix + 'index.html'))
	})
}

gulp.task('generateIndex-elements-extra', function(){
	return gulp.src([
		'app/components/controls/index.html',
		'app/components/compositecontrols/index.html',
		'app/components/grids/index.html',
		'!app/components/index.html'])
	.pipe(indexCreator('.', {removePrefix:'/app/components/'}))
	.pipe(gulp.dest('app/components/index.html'))
})

gulp.task('build', ['generateIndex'])

gulp.task('serve', ['build', 'showMessage'], serve('app'))

gulp.task('serve:dist:launch', ['showMessage'], serve('dist'))

gulp.task('serve:dist', ['build', 'vulcanize', 'serve:dist:launch'])

