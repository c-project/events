var mongoose = require('mongoose'),
	Event = mongoose.model('Event'),
	Photo = mongoose.model('Photo');

exports.list = function(req, res) {
	Photo.findByEvent(req.event, function(err, photos){
		if (err) {
			console.log(err);
            // res.render('error', {
            //     status: 500
            // });
		} else {
			res.jsonp(photos);
		}
	});
};

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

exports.upload = function(req, res) {
	alleup.upload(req, res, function(req, file, res){
		console.log('UPLOADED FILE ' + file);

		res.end();
	});
}