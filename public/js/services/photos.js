angular.module('events.photos').factory("Photos", ['$resource', function($resource) {
    return $resource('events/:eventId/photos/:photoId', {
        eventId: '@eventId',
        photoId: '@photoId'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);