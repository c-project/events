/**
 * Module dependencies.
 */
var should = require('should'),
    app = require('../server'),
    mongoose = require('mongoose'),
    Event = mongoose.model('Event'),
    Photo = mongoose.model('Photo');


//Globals
var events = [];
for (var i = 0; i <= 5; i++) {
    events[i] = new Event({date:new Date(), title:'Event Number '+i});
}
var photos = [];

//The tests


describe('<Unit Test>', function() {
    describe('Model Event:', function() {
        beforeEach(function(done) {
            Photo.remove().exec();
            Event.remove().exec();
            done();
        });

        describe('Test Data', function() {
            it('should load test data', function(done) {
                return (function(){
                    for (var i = 0; i < events.length; i++) {
                        events[i].save(function(error, event){
                            // console.log('!!!!', event);
                            for (var j = 1; j <= 9; j++) {
                                var photo = new Photo({title:'Photo '+j, fileName:j+'.jpg', event:event});
                                photo.save(function(err) {
                                    if (err) console.error(err, photo)
                                        else console.log('photo ' + photo._id + ' for event ' + event._id + ' created');
                                });
                            }
                        });
                    }
                    done();
                })()
            });
            // it('load test photos', function(){
            //     return (function(){
            //         for (var i = 0; i < events.length; i++) {
            //             for (var j = 1; j <= 9; j++) {
            //                 var photo = new Photo({title:'Photo '+j, fileName:j+'.jpg', event:events[i]});
            //                 photo.save(function(err) {
            //                     if (err) console.error(err);
            //                 });
            //             }
            //         }
            //     })()
            // });
        });
    });
});
