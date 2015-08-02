angular.module('Contactical', [])
	.service('ContactService', function($http){
		var vm = this;
		vm.contacts = [];
		$http.get('http://localhost:9001/contacts');
	});