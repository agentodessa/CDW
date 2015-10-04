(function () {

	'use strict';

	angular
		.module('cdw.app')
		.constant('templateModulesDir', '<%= templateModulesDir %>')
		.constant('homeVendorDir', '<%= templateModulesDir %>' + 'home/')
		.constant('chatVendorDir', '<%= templateModulesDir %>' + 'chat/')
		.constant('authVendorDir', '<%= templateModulesDir %>' + 'authorization/')
		.constant('userVendorDir', '<%= templateModulesDir %>' + 'user/')
		.constant('guestVendorDir', '<%= templateModulesDir %>' + 'guest/')
		.constant('profileVendorDir', '<%= templateModulesDir %>' + 'profile/')
		.constant('componentsVendorDir', '<%= templateComponentsDir %>')
		.constant('componentsVendorDir', '<%= templateComponentsDir %>');
})();