hrApp.controller('MathController', ['$scope', 'MathService', function($scope, compute){
    
    $scope.calculate = function() {
//        TODO #8 calculate op1, op2, op3, op4
          $scope.op1 = $scope.no1 + $scope.no2;
          $scope.op2 = $scope.no1 - $scope.no2;
          $scope.op3 = $scope.no1 * $scope.no2;
          $scope.op4 = $scope.no1 / $scope.no2;
//        TODO #13 refactor your calculations using MathService
    }

}]);
