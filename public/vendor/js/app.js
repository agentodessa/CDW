//(function () {
//
//	'use strict';
////
//	angular
//		.module('app')
//		.constant('templateModulesDir', 'vendor/modules/')
//		.constant('homeVendorDir', 'vendor/modules/' + 'home/')
//		.constant('chatVendorDir', 'vendor/modules/' + 'chat/')
//		.constant('authVendorDir', 'vendor/modules/' + 'authorization/')
//		.constant('userVendorDir', 'vendor/modules/' + 'user/')
//		.constant('guestVendorDir', 'vendor/modules/' + 'guest/')
//		.constant('profileVendorDir', 'vendor/modules/' + 'profile/')
//		.constant('componentsVendorDir', 'vendor/components/')
//		.constant('componentsVendorDir', 'vendor/components/');
//
//

//})();
(function () {
	'use strict';
	angular
		.module('app', ['ui.router'])
		.run(startupAPP);

	function startupAPP() {
		Parse.initialize("Sr1VJrDJGtbHkM8DJdJTFPV3qbhekCErY9Frx0eO", "7T6mLWAas7nWfAXffXpa0LWk9TbrYJGqPDCBL3fj");
		var TestObject = Parse.Object.extend("TestObject");
		var testObject = new TestObject();
		testObject.save({foo: "bar"}).then(function(object) {
			console.log(object)
		});
	}
})();
(function () {
	'use strict';
	/*
	@ngInject
	*/
	function authController() {

	}
	angular
		.module('app')
		.controller('authController', authController)
})();
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