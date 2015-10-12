(function () {
	'use strict';
	/*
	 @ngInject
	 */

	function authModal() {
		return {
			restrict: 'EA',
			templateUrl: 'vendor/modules/authorization/' + 'authorization.directive.html',
			controller: 'authController'
		}
	}

	angular
		.module('app')
		.directive('authModal', authModal)
})();