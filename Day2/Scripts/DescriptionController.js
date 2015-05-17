hrApp.controller('DescriptionController', ['$scope', function($scope){
    $scope.title = 'Two Way Binding Demo';
    $scope.myVar1 = 'A simple demo application';
    $scope.myVar2 = 'In this application we will use AngularJS framework.'
    $scope.childtemplate = 'templates/childscope.html';
    $scope.resetFirstVariable = function() {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val) {
        $scope.firstVariable = val;
    };

    $scope.descriptionShow = true;
    $scope.toggleDescriptionShow = function() {
        $scope.descriptionShow = !$scope.descriptionShow;
    };

}]);
