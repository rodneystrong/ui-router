angular.module('routerApp').controller('mainCtrl',function($scope, $stateParams){

    $scope.test = 'Hello From Home Page';

    $scope.test = "hey projects page";

    //console.log($window.path);

    //Create a service that returns an object with a 'name' property on it
    //pass along the $stateParams
    
    console.log($stateParams);

});
