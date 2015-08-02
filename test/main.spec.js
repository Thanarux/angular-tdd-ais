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

	describe('ListContacts', function() {
		var $scope;
		var contactService;
		var $httpBackend;
		var $controller;

		beforeEach(function(){
			module('Contactical');
			inject(function($injector, $rootScope){
				$scope = $rootScope.$new();
				contactService = $injector.get('ContactService');
				$httpBackend = $injector.get('$httpBackend');
				$controller = $injector.get('$controller');
			});
		});

		it('should store an array of contacts in scope', function(){
			$controller('ListContacts', { $scope: $scope, ContactService: contactService });
			expect($scope.contacts).toEqual(jasmine.any(Array));
		});
	});
});