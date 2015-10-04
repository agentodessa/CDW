(function () {
	'use strict';
	angular
		.module('app')
		.constant('templatesMOdulesDir','');
})();
/**
 * Created by agent on 10/4/2015.
 */

(function () {
	'use strict';


	function authModal(templatesMOdulesDir) {
		return {
			restrict: 'EA',
			templateUrl: templateModulesDir + 'authorization/authorization.directive.html'
		}
	}
	authModal.$inject = ["templatesMOdulesDir"];

	angular
		.module('app')
		.directive('authModal', authModal)
})();