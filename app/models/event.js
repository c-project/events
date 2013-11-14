var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    title: String,
    description: String,
    location: String,
    image:String
});

EventSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).exec(cb);
    }
};

mongoose.model('Event', EventSchema);