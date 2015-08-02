describe('Contactical', function() {
	describe('ContactService', function() {
		var service;
		beforeEach(function(){
			module('Contactical');
			inject(function($injector){
				service = $injector.get('ContactService');
			});
		})
		it('should contain data in array', function(){
			expect(service.contacts).toEqual(jasmine.any(Array));
		});
	});
});