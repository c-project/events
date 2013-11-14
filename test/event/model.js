/**
 * Module dependencies.
 */
var should = require('should'),
    app = require('../../server'),
    mongoose = require('mongoose'),
    Event = mongoose.model('Event');

//Globals
var event;

//The tests
describe('<Unit Test>', function() {
    describe('Model Event:', function() {
        beforeEach(function(done) {
            // user = new User({
            //     name: 'Full name',
            //     email: 'test@test.com',
            //     username: 'user',
            //     password: 'password'
            // });

            // user.save(function(err) {
            //     article = new Article({
            //         title: 'Article Title',
            //         content: 'Article Content',
            //         user: user
            //     });

                // done();
            // });
            event = new Event({
                date: new Date(),
                title: 'event title',
                image: '1.jpg'
            });
            done();
        });

        describe('Method Save', function() {
            it('should be able to save without problems', function(done) {
                return event.save(function(err) {
                    should.not.exist(err);
                    done();
                });
            });

        });

        // afterEach(function(done) {
        //     // Article.remove({});
        //     // User.remove({});
        //     done();
        // });
        after(function(done){
            Event.remove().exec();
            done();
        });
    });
});
