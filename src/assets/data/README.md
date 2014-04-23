Config Service is intended for you to remove the External URLs from services.  Not to have them hardcoded in our JS files.
We will define our services like so in the properties.json file.  


			#############################################################################
			Properties File Layout
			#############################################################################
			{
			  "service_configuration": {
			    "services": [
			      {
					"id": "0",
			        "name": "Get_TestCenters",
			        "url": "http://yourServiceURL.com"
			      }
			    ]
			  }
			}
			#############################################################################
			END
			##############################################################################


-------------------------------------------------------------------------------------------------------------------------------
			
			#############################################################################
			Code In Conroller to Access Link Properties.
			#############################################################################
			$scope.getConfig = function() {
								configService.get(function(data) {
									$scope.config = data.service_configuration;
									var testCenterURL=$scope.config.services[0].url;
									
			})
			
			
			#############################################################################
			END
			##############################################################################
