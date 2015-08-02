angular.module('Contactical', [])
	.service('ContactService', function($http){
		var vm = this;
		vm.contacts = [];
		
		vm.get = function(){
			$http.get('http://localhost:9001/contacts')
				.then(function(response){
					while(response.data[0]) {
						vm.contacts.push(response.data.pop());
					}
				});
		};
	})
	.controller('ListContacts', function($scope, ContactService){
		var vm = this;
		$scope.contacts = ContactService.contacts;
		$scope.get = function(){
			ContactService.get();
		};
	});