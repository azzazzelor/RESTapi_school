'use strict';

const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const tutorSchema= new Schema ({
    name: {type: String},
    school: {type: Schema.Types.ObjectId, ref: 'School'},
    students : [{
        type: Schema.Types.ObjectId, ref: 'Student'

    }]
}) 

export default mongoose.model('Tutor', tutorSchema);