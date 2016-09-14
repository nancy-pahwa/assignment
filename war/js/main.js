var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'home.html',
			controller: 'StudentController'
		})
		.when('/form', {
			templateUrl: 'form.html',
			controller: 'formctrl'
		})
		.when('/viewForm', {
			templateUrl: 'viewForm.html',
			controller: 'formctrl'
		})
		.when('/viewStudents', {
			templateUrl: 'viewStudents.html',
			controller: 'StudentController'
		})
		.otherwise({
			redirectTo: '/home'
		});
});

mainApp.factory('userdatastore', function(){
	  var userData = {};
	  //userData.list = [];

	  userData.add = function(object){
		 // userData.list.push({username: object.username, password: object.password});
		  userData.userObj = object;
	  };

	  return userData
	});

mainApp.controller('StudentController', function($scope) {
	/*$scope.students = [
		{name: 'Mark Waugh', city:'New York'},
		{name: 'Steve Jonathan', city:'London'},
		{name: 'John Marcus', city:'Paris'}
	];
*/
	$scope.message = "Click on the hyper link to view the students list.";
});

mainApp.controller("formctrl",function($scope,$location,userdatastore){
	$scope.Country = 'India';
	$scope.userData = {};
	$scope.submit=function()
	{
		console.log("Hello");
		$scope.submitted=true;
		if($scope.newForm.$invalid){

			console.log($scope);
			return;
		}
		$scope.userData.username = $scope.username;
		$scope.userData.password = $scope.password;
		$scope.userData.passwordCompare = $scope.passwordCompare;
		$scope.userData.firstname = $scope.firstname;
		$scope.userData.lastname  = $scope.lastname;
		$scope.userData.string  = $scope.string;
		$scope.userData.phoneno = $scope.phoneno;
		$scope.userData.add1 = $scope.add1;
		$scope.userData.add2 = $scope.add2;
		$scope.userData.Country = $scope.Country;
		$scope.userData.selectedState = $scope.selectedState;
		$scope.userData.selectedCity = $scope.selectedCity;
		$scope.userData.birth = $scope.birth;
		
		userdatastore.add($scope.userData);
		$location.path('/viewForm');
	}
	
	
	$scope.loadForm=function()
	{
		alert("Called");
		var tempObj = userdatastore.userObj;
		console.log(userdatastore);
		$scope.username = tempObj.username;
		$scope.password = tempObj.password;
		$scope.passwordCompare = tempObj.passwordCompare;
		$scope.firstname = tempObj.firstname;
		$scope.lastname = tempObj.lastname;
		$scope.string = tempObj.string;
		$scope.phoneno = tempObj.phoneno;
		$scope.add1 = tempObj.add1;
		$scope.add2 = tempObj.add2;
		$scope.Country = tempObj.Country;
		$scope.selectedState = tempObj.selectedState;
		$scope.selectedCity = tempObj.selectedCity;
		$scope.birth = tempObj.birth;
		
		
	}
		
	$scope.states=[
	     	       'Uttar Pradesh',
	     	       'Rajastan',
	     	       'Madhya Pradesh',
	     	       'West Bengal',
	     	       'Maharashtra',
	     	       'Tamil Nadu',
	     	       'Uttrakhand',
	     	       'Punjab',
	     	       'Sikkim',
	     	       'Karnataka',
	     	       'Jharkhand',
	     	       'Jammu And Kashmir',
	     	       'Kerala',
	     	       'Himachal Pradesh',
	     	       'Haryana',
	     	       'Gujarat',
	     	       'Goa'
	     	       
	     	        ];
	
	$scope.changeState=function()
	{

		if($scope.selectedState=='Uttar Pradesh')
	{
			
	$scope.cities=[
	                            'Meerut',
	                            'Agra'
	        ];
	}
		
		if($scope.selectedState=='Rajastan')
			{
			
			$scope.cities=[
	                          'Jaipur',
	                            'Udapur'
	];
}
		if($scope.selectedState=='Madhya Pradesh')
			{
			
			$scope.cities=[
	                          'Bhopal',
	                            'Indore'
	];
}
		if($scope.selectedState=='West Bengal')
		{
		
		$scope.cities=[
                          'Kolkata',
                            'Asansol'
];
}

		if($scope.selectedState=='Maharashtra')
		{
		
		$scope.cities=[
                          'Pune',
                            'Mumbai'
];
}
		
		if($scope.selectedState=='Tamil Nadu')
		{
		
		$scope.cities=[
                          'Chennai',
                            'Madurai'
];
}
		
		if($scope.selectedState=='Uttrakhand')
		{
		
		$scope.cities=[
                          'Haridwar',
                            'Dehradun'
];
}
		
		if($scope.selectedState=='Punjab')
		{
		
		$scope.cities=[
                          'Chandigarh',
                            'Amritsar'
];
}
		

		if($scope.selectedState=='Sikkim')
		{
		
		$scope.cities=[
                          'Yuksom',
                            'Gangtok'
];
}
		

		if($scope.selectedState=='Karnataka')
		{
		
		$scope.cities=[
                          'Bengaluru',
                            'Mysore'
];
}
		

		if($scope.selectedState=='Jharkhand')
		{
		
		$scope.cities=[
                          'Ranchi',
                            'Jamshedpur'
];
}
		if($scope.selectedState=='Jammu And Kashmir')
		{
		
		$scope.cities=[
                          'Srinagar',
                            'Jammu'
];
}
		
		if($scope.selectedState=='Kerala')
		{
		
		$scope.cities=[
                          'Thrissur',
                            'Kochi'
];
}
		
		if($scope.selectedState=='Himachal Pradesh')
		{
		
		$scope.cities=[
                          'Dharamshala',
                            'Shimla'
];
}
		
		
		if($scope.selectedState=='Haryana')
		{
		
		$scope.cities=[
                          'Gurugram',
                            'Faridabad'
];
}
		
		if($scope.selectedState=='Gujarat')
		{
		
		$scope.cities=[
                          'Ahmdabad',
                            'Surat'
];
}
		
		if($scope.selectedState=='Goa')
		{
		
		$scope.cities=[
                          'Margao',
                            'Panaji'
];
}
	}

});