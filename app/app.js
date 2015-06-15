(function(){
	
	var app = angular.module('eventsApp', [
		'ngRoute',
		'eventsController'
	])

	app.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider.
	      when('/', {
	        templateUrl: 'assets/js/templates/events-list.html',
	        controller: 'mockDataController'
	      }).
	      when('/events/:eventId', {
	        templateUrl: 'assets/js/templates/event-detail.html',
	        controller: 'eventDetailController'
	      }).
	      otherwise({
	        redirectTo: '/'
	      });
	  }]);

})();

