//This module returns all the URLS needed to Run The services...
angular
.module('configurationService', [ 'ngResource' ])
.factory(
		'configService',
		function($resource) {
			return $resource('assets/data/properties.json');
		});
	
	
	
	
	
