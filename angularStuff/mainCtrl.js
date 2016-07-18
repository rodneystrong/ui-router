angular.module('routerApp').controller('mainCtrl',function($scope, $stateParams){

    $scope.test = 'Hello From Home Page';

    $scope.test = "hey projects page";

    //console.log($window.path);

    console.log($stateParams);

});
