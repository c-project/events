angular.module('events.directives', [])
  // .controller('EventsController', function($scope) {
  //   $scope.name = 'John Smith';
  // })
  .directive('event', function() {
    return {
      restrict: 'E',
      templateUrl: '/views/template/template.html',
      // scope: {
      //   ownerName: '=model'
      // },
      link: function(scope, iElement, iAttrs, ctrl) {
        // $scope.events = $scope.allEvents;
        console.log(iElement, iAttrs, ctrl);
        console.log(scope.ownerName);
      },
      controller: ['$scope', '$http', function($scope, $http){
        $scope.events = [{
          id: 1,
          name: 'Event 1',
          image: '1.jpg'
        },{
          id: 2,
          name: 'Event 2',
          image: '2.jpg'
        },{
          id: 3,
          name: 'Event 3',
          image: '3.jpg'
        }]
        $scope.globalEvent = {
          id:4,
          name:'global',
          image:'1.jpg'
        }
        $scope.onClickHandler = function() {
          this.visible = !this.visible;
        }
      }]
    }
  }).directive('isoRepeat', function ($timeout) {
    return {
        scope: {
            items: '=isoRepeat'
        },
        template:'/views/templates/photo-galery.html',
        link: function (scope, element, attrs) {
            
            var options = {
                animationEngine : 'jquery',
                itemSelector: 'article',
                layoutMode: 'fitRows',
                sortAscending: true
            };
            
            element.isotope(options);
            
            scope.$watch('items', function(newVal, oldVal){
               $timeout(function(){
                    element.isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' }); 
               });
            },true);
            
            scope.logHello = function(){
              console.log("hello world")
            }
        }
    };
});

