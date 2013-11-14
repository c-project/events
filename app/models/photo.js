var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var PhotoSchema = new Schema({
    title: String,
    description: String,
    // comments: String,
    fileName: String,
    images:{
    	small: {
    		height:Number,
    		width:Number
    	},
    	medium: {
    		height:Number,
    		width:Number
    	},
    	large: {
    		height:Number,
			width:Number
    	},
    	original: {
    		height:Number,
    		width:Number
    	}
    },
    event: {
    	type:Schema.ObjectId,
        ref: 'Event'
    }
});

PhotoSchema.statics.findByEvent = function(event, cb) {
	this.find({event:event.id}, cb);
}
PhotoSchema.statics.load = function(id, cb) {
    this.findOne({
            _id: id
        }).exec(cb);
}


mongoose.model('Photo', PhotoSchema);