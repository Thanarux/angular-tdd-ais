angular.module('Contactical', [])
	.service('ContactService', function(){
		var vm = this;
		vm.contacts = [];
	});