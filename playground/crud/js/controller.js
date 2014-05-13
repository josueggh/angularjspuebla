var crudControllers = angular.module('crudControllers', ['crudService']);

crudControllers.controller( 'crudController' ,
		function($scope,Crud){

			$scope.list = Crud.read();

			$scope.addContact = function(){	
				var newContact = {
					'name' 			: $scope.newContact.name,
					'lastname' 	: $scope.newContact.lastname,
					'mail' 			: $scope.newContact.mail,
					'edad' 			: $scope.newContact.edad,
				}
				Crud.save( newContact );
			}

		}
);	