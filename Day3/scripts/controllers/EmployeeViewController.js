hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactory',
    function($scope, $http, $routeParams, $location, commonRF) {

        $scope.employee = {};


        // TODO #HR6 get employee by id
        $http.get(commonRF.findOneEmployeeUrl + $routeParams.employeeid).
            success(function(data, status, headers, config) {
                $scope.employee = data;
            }).
            error(function(data, status, headers, config) {
                alert("Error!");
            });


        $scope.back = function() {
            $location.url('/employeelist/');
        }

    }]);