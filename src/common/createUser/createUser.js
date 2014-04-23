//This module returns all the URLS needed to Run The services...
angular
		.module('createService', [ 'ngResource' ])
		.factory(
				'createService',
				function($http) {
					return {
						createUser : function(id,fname,lname,gender) {
							return $http
									.post(
											'http://192.168.6.139:9763/PersonService-1.0.0/services/person__service/person/createUser/?fname='+fname+'&id='+id+'&perGender='+gender+'&lname='+lname);

						}
					};
				}

		);

	
	
	
	
