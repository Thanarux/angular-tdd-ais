describe('Contactical', function() {
	describe('ContactService', function() {
		var service;
		beforeEach(function($injecttor){
			module('Contactical');
			service = $injector.get('ContactService');
		})
		it('should contain data in array', function(){
			expect(true).toBe(true)
		});
	});
});