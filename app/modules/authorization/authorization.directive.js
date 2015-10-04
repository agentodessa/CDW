(function () {
	'use strict';


	function authModal(templatesMOdulesDir) {
		return {
			restrict: 'EA',
			templateUrl: templateModulesDir + 'authorization/authorization.directive.html'
		}
	}

	angular
		.module('app')
		.directive('authModal', authModal)
})();