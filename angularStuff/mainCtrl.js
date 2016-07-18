angular
  .module('routerApp')
  .controller('mainCtrl',function($scope, $stateParams, mainService){

    $scope.test = "hey projects page";

    //console.log($window.path);

    //Create a service that returns an object with a 'name' property on it
    //pass along the $stateParams
    var id = $stateParams;

    //if there are stateParams, then go to the
    //service and get all the ids.
    if($stateParams) {
        mainService.getRecentProject(id);
    }


    console.log($stateParams);

});
