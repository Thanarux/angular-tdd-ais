module.exports = function(config) {
	config.set({
		browsers: ['PhantomJS'],
		frameworks: ['jasmine'],
		
		files: [
			'bower_components/angular/angular.js',

			'app/**/*.js',
			'test/**/*.js'
		]
	})
}