var express = require('express'),
	mongoose = require('mongoose'),
    passport = require('passport'),
	fs = require('fs'),
    Alleup = require('alleup'),
    mongoStore = require('connect-mongo')(express),
    flash = require('connect-flash'),
    helpers = require('view-helpers'),
	app = express();

//Load configurations
//if test env, load example file
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('./config/config'),
    auth = require('./config/authorization');

var db = mongoose.connect(config.db);

//Bootstrap models
var models_path = __dirname + '/app/models';
var walk = function(path) {
    fs.readdirSync(path).forEach(function(file) {
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);
        if (stat.isFile()) {
            if (/(.*)\.(js|coffee)/.test(file)) {
                require(newPath);
            }
        } else if (stat.isDirectory()) {
            walk(newPath);
        }
    });
};
walk(models_path);

//bootstrap passport config
require('./config/passport')(passport);

var alleup = new Alleup({storage:'dir', config_file:'config/alleup.json'})

app.use(express.static('public'));
app.use('/storage', express.static('photo-storage'));

//Set views path, template engine and default layout
app.set('views', 'app/views');
app.set('view engine', 'jade');
//Enable jsonp
app.enable("jsonp callback");



    app.configure(function() {
        //cookieParser should be above session
        app.use(express.cookieParser());

        //bodyParser should be above methodOverride
        app.use(express.bodyParser());
        app.use(express.methodOverride());

        //express/mongo session storage
        app.use(express.session({
            secret: 'Events'
            // store: new mongoStore({
            //     db: db.connection.db,
            //     collection: 'sessions'
            // })
        }));

        //connect flash for flash messages
        app.use(flash());

        //dynamic helpers
        app.use(helpers(config.app.name));

        //use passport session
        app.use(passport.initialize());
        app.use(passport.session());

        //routes should be at the last
        app.use(app.router);

        //Assume "not found" in the error msgs is a 404. this is somewhat silly, but valid, you can do whatever you like, set properties, use instanceof etc.
        app.use(function(err, req, res, next) {
            //Treat as 404
            if (~err.message.indexOf('not found')) return next();

            //Log it
            console.error(err.stack);

            //Error page
            res.status(500).render('500', {
                error: err.stack
            });
        });

        //Assume 404 since no middleware responded
        app.use(function(req, res, next) {
            res.status(404).render('404', {
                url: req.originalUrl,
                error: 'Not found'
            });
        });

    });

//Bootstrap routes
require('./config/routes')(app);

app.listen(3000);

//expose app
exports = module.exports = app;
