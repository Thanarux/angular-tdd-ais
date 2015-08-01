var gulp = require('gulp');
var browserSync = require('browser-sync');
var karma = require('karma').server;

gulp.task('server', function(){
	browserSync.init({
		notify: false,
		port: 8080,
		server: {
			baseDir: ['app'],
			routes: {
				'/bower_components': 'bower_components'
			}
		}
	})

	gulp.watch(['app/**/*.*'])
		.on('change', browserSync.reload);
});

gulp.task('test-browser', function(){
	browserSync.init({
		notify: false,
		port: 8081,
		server: {
			baseDir: ['test', 'app'],
			routes: {
				'/bower_components': 'bower_components',
				'/node_modules': 'node_modules'
			}
		}
	})

	gulp.watch(['app/**/*.*', 'test/**/*.*'])
		.on('change', browserSync.reload);
});

gulp.task('test', function(){
	karma.start({
		configFile: __dirname + '/karma.conf.js',
		singleRun: false,
		reporters: ['progress', 'jasmine-runner']
	})
});