hrApp.controller('MainController', ['$scope', '$rootScope', function($scope, $rootScope){
    $scope.name = "Valoarea din scope";
    $scope.otherName = "A doua valoare din scope";

    $scope.carList = [{
        type: 'car',
        model: 'VW Golf'
        },
        {type: 'car',
            model: 'Audi'}
        ];
}]);