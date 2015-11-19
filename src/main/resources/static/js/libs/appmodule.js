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
	
	$scope.consultaDatos = function(boton) {    
       
                $scope.dibujar();
                $scope.dibujarSVG();            
            $http({
            method  : 'GET',
            url     : 'blueprints/'+$scope.p,
            data    : obj,
            
	        }).success(function(data, status, headers, config) { 
				//$scope.dibujar(); 
			});
			 response.error(function(data, status, headers, config) {
			alert("The petition has failed. HTTP Status:"+status);
                        });
        
        };
    
    $scope.dibujar = function() {
                alert($scope.p);
		var cnv= document.getElementById("myCanvas");
		var ctx = cnv.getContext("2d");
                
                if($scope.p == "larecta"){
                    ctx.moveTo(10,10);
                    ctx.lineTo(10,180);
                    ctx.strokeStyle = "blue";
                    ctx.lineWhite = 18;
                    ctx.stroke();
                }
                
                if($scope.p == "rayon"){
                    ctx.moveTo(40,60);
                    ctx.lineTo(200,200);
                    ctx.strokeStyle = "red";
                    ctx.lineWhite = 7;
                    ctx.stroke();
                }
                
                if($scope.p == "poligono1"){
                    ctx.fillStyle="#FF0000";
                    ctx.fillRect    (20,20,150,100);
                }
                
    };
    
    $scope.dibujarSVG = function() {
                alert($scope.p);
                var cnv= document.getElementById("myCanvas");
		var ctx = cnv.getContext("2d");
		circulo = document.createElementNS("circulo","circle");
                
                
    };
    
    


    }
);
})();





