//Setting up route
window.app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/events', {
            templateUrl: 'views/events/list.html'
        }).
        when('/events/create', {
            templateUrl: 'views/events/create.html'
        }).
        when('/events/:eventId/edit', {
            templateUrl: 'views/events/edit.html'
        }).
        when('/events/:eventId', {
            templateUrl: 'views/events/view.html'
        }).
        when('/events/:eventId/photos', {
            templateUrl: 'views/photos/list.html'
        }).
        when('/', {
            redirectTo: '/events'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);