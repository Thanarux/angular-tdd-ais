describe('Contactical', function() {
	describe('ContactService', function() {
		var service;
		var $httpBackend;

		beforeEach(function(){
			module('Contactical');
			inject(function($injector){
				service = $injector.get('ContactService');
				$httpBackend = $injector.get('$httpBackend');
				$httpBackend.expectGET('http://localhost:9001/contacts')
					.respond(200, [{name:'Ball Weera Kasetsin'},{name:'Dean Salah'}]);
				service.get();
			});
		})

		it('should contain data in array', function(){
			expect(service.contacts).toEqual(jasmine.any(Array));
		})

		it('should call backend and return 2 contacts', function(){
			$httpBackend.flush();
			expect(service.contacts.length).toEqual(2);
		})
	});

	describe('ListContacts', function() {
		var $scope;
		var ContactService;
		var $controller;

		beforeEach(module('Contactical'));

		beforeEach(inject(function($injector, $rootScope, _$controller_){
			$scope = $rootScope.$new();
			ContactService = $injector.get('ContactService');
			$controller = _$controller_;
		}));
		it('should call ContactService.get()', function(){
			$controller('ListContacts', { $scope: $scope, ContactService: ContactService });
			spy = spyOn(ContactService, 'get');
			$scope.get();
			expect(spy).toHaveBeenCalled();
		});

		it('should store an array of contacts in scope', function(){
			$controller('ListContacts', { $scope: $scope, ContactService: ContactService });
			expect($scope.contacts).toEqual(jasmine.any(Array));
		});
	});
});