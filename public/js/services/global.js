angular.module('events.system').factory("Global", [function() {
	console.log(window.user);
    var _this = this;
    _this._data = {
        user: window.user,
        authenticated: !! window.user
    };

    return _this._data;
}]);