describe('Contactical', function() {
	describe('ContactService', function() {
		var service;
		var $httpBackend;

		beforeEach(function(){
			module('Contactical');
			inject(function($injector){
				service = $injector.get('ContactService');
				$httpBackend = $injector.get('$httpBackend');
			});
		})

		it('should contain data in array', function(){
			expect(service.contacts).toEqual(jasmine.any(Array));
		})

		it('should call backend', function(){
			$httpBackend.expectGET('http://localhost:9001/contacts')
				.respond(200, []);

			$httpBackend.flush();
		})
	});
});