(function(){
    'use strict';
     
    angular.module('CalculatriceApp',[])

    .controller('CalculatriceController',CalculatriceController);
    CalculatriceController.$inject = ['$scope'];
    function CalculatriceController ($scope){
       $scope.num1="0";
       $scope.num2="0";
       $scope.num3="";
       $scope.add = function(){
        $scope.num3=$scope.num1+$scope.num2;
       };
       $scope.sub = function(){
        $scope.num3=$scope.num1-$scope.num2;
       };
       $scope.mult = function(){
        $scope.num3=$scope.num1*$scope.num2;
       };
       $scope.div = function(){
        $scope.num3=$scope.num1/$scope.num2;
       };
    };
})();