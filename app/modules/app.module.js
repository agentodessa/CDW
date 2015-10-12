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