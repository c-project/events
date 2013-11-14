angular.module('events.photos').controller('PhotosController', ['$scope', '$routeParams', '$location', 'Events', 'Photos', function ($scope, $routeParams, $location, Events, Photos) {

    $scope.find = function() {
        Photos.query({eventId:$routeParams.eventId}, function(photos) {
            console.log(photos);
            $scope.photos = photos;
        });
    };

    $scope.findByEvent = function(event) {
        Photos.query({eventId:event._id}, function(photos) {
            console.log(photos);
            $scope.photos = photos;
        });
    };

    $scope.findOne = function() {
        Events.get({
            eventId: $routeParams.eventId
        }, function(event) {
            $scope.event = event;
        });
    };

    $scope.onClickHandler = function(){
        
    }
}]);