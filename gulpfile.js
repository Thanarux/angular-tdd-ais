var gulp = require('gulp');
var browserSync = require('browser-sync');
var karma = require('karma').server;
var server = require('gulp-live-server');

gulp.task('api-server', function(){
	var live = new server('server.js');
	live.start();
});

gulp.task('server', ['api-server'], function(){
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

	gulp.watch(['test/**/*.*', 'app/**/*.*'])
		.on('change', browserSync.reload);
});

gulp.task('test', function(){
	karma.start({
		configFile: __dirname + '/karma.conf.js',
		singleRun: false,
		reporters: ['progress', 'jasmine-runner']
	})
});