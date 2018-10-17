angular.module('myApp', ['ngMaterial', 'ngMessages'])
.controller('MyController', function($scope) {
	$scope.gender = ["Мужской", "Женский"];
	$scope.nast = ["1", "2", "3"];
	$scope.show = ["Только руководителю", "мне", "никому"];
	
	
	$scope.form = {
		secondName: "",
		name: "",
		otch: "",
		gender: "",
		nast: ""
		
		
	}
 
 
 
});


