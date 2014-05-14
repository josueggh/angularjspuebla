var crudControllers = angular.module('crudControllers', ['crudService']);

crudControllers.controller( 'crudController' ,
		function($scope,Crud){

			$scope.list = Crud.read();

			$scope.addContact = function(){	
				var newContact = {
					'name' 			: $scope.newContact.name,
					'lastname' 	: $scope.newContact.lastname,
					'ciudad'		: $scope.newContact.ciudad,
					'telefono'	: $scope.newContact.telefono,
					'mail' 			: $scope.newContact.mail,
					'edad' 			: $scope.newContact.edad,
				}
				var savedContact = Crud.save( newContact );
				$scope.list.push ( savedContact );
				$scope.newContact = null;
			}

			$scope.deleteContact = function(index){
				Crud.delete( { id: $scope.list[index].id } );
				$scope.list.splice(index,1);
			}

			$scope.updateContact = function(index){
				$scope.list[index].edad += 1;
				Crud.update( { id: $scope.list[index].id} , {edad:$scope.list[index].edad});
			}

		}
);	