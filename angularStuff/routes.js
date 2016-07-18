angular.module('routerApp')
    .config(function($stateProvider, $urlRouterProvider) {

        //This is a catch all for our routes. "If you can't find the route, send back to home".
        //Kinda' like a global 404
        $urlRouterProvider.otherwise("/");

//       We need to configure our routes here

        //in the code below, we're adding a .state property to the stateProvider
        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'views/home.html'
          })
          .state('contact', {
            url:'/contact',
            templateUrl: 'views/contact.html'
          });

});
