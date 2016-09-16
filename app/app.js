'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngResource',
  'ngRoute',
  'myApp.welcome',
  'myApp.game',
  'myApp.results',
  'myApp.version',
  'chart.js'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/welcome'});

  Chart.defaults.global.colors = [ '#333', '#666', '#999', '#AAA', '#DDD', '#FFF', '#4D5360'];
}]);
