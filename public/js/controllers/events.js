angular.module('events.events').controller('EventsController', ['$scope', '$routeParams', '$location', 'Events', 'Photos', function ($scope, $routeParams, $location, Events, Photos) {

    $scope.find = function() {
        Events.query(function(events) {
            console.log(events);
            $scope.events = events;
        });
    };

    $scope.findOne = function() {
        Events.get({
            eventId: $routeParams.eventId
        }, function(event) {
            $scope.event = event;
            Photos.query({eventId:event._id}, function(photos) {
                $scope.event.photos = photos;
            });
        });
    };

    $scope.show = function() {
        Events.get({
            eventId: $routeParams.eventId
        }, function(event) {
            $scope.event = event;
            Photos.query({eventId:event._id}, function(photos) {
                $scope.event.photos = photos;
            });
        });
        $scope.isoOptions = {
                animationEngine : 'best-available',
                masonry: {
                    gutterWidth: 10 
                },
                transformsEnabled : false,
                containerStyle : {position:'relative'}
        }
    };

    $scope.onClickHandler = function(){
        
    }
}]);