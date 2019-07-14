'use strict';

const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const schoolSchema = new Schema({
    id: Number,
    name : {
        type: String,
    },
    tutors : [{
        type: Schema.Types.ObjectId, ref: 'Tutor'
     }]
})

export default mongoose.model('School', schoolSchema);