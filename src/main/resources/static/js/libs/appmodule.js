(function () {
    var app = angular.module('modone', []);
    
    app.controller('plan_control', function($scope,$http){
		$scope.p = "";
		$scope.blueprints = [];
		
	$scope.loadData = function() {
    var configList = {
        method: "GET",
        url: "blueprints"
    };

    var response=$http(configList);

    response.success(function(data, status, headers, config) {
        $scope.blueprints = data;
    });

    response.error(function(data, status, headers, config) {
        alert("The petition has failed. HTTP Status:"+status);
    });
	};
	
	 $scope.consultaDatos = function() {
		     
        $http({
            method  : 'GET',
            url     : 'blueprints/'+$scope.p,
            data    : obj,
	        }).success(function(data, status, headers, config) { 
				$scope.bluep=data; 	
		
			});
			 response.error(function(data, status, headers, config) {
			alert("The petition has failed. HTTP Status:"+status);
    });
    };
    
    $scope.dibujar = function() {
		var cnv= document.getElementById("myCanvas");
		var ctx = cnv.getContext("2d");
    
    };


    }
);
})();





