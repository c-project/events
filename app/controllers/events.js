var mongoose = require('mongoose'),
	Event = mongoose.model('Event');

exports.event = function(req, res, next, id) {
    Event.load(id, function(err, event) {
        if (err) return next(err);
        if (!event) return next(new Error('Failed to load article ' + id));
        req.event = event;
        next();
    });
};

exports.list = function(req, res) {
	// res.render('event/list', {events:allEvents});
	Event.find().exec(function(err, events){
		if (err) {
            res.render('error', {
                status: 500
            });
		} else {
			res.jsonp(events);
		}
	});
};

exports.find = function(req, res) {
    console.log(req.event);
    res.jsonp(req.event)
}

exports.create = function(req, res) {
	var event = new Event(req.body);
	event.save(function(error) {
        if (err) {
            // return res.send('users/signup', {
            //     errors: err.errors,
            //     article: article
            // });
        } else {
            res.jsonp(article);
        }
	});
};