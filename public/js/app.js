window.app = angular.module('events', 
	['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.route','events.events','events.common', 'events.photos', 'iso', 'events.system']
);

angular.module('events.events', []);
angular.module('events.photos', []);
angular.module('events.common', []);
angular.module('events.system', []);