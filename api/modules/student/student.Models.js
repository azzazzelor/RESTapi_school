'use strict';

const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const studentSchema = new Schema({
    first_name : {type: String},
    date_of_birth : { type : Date, default: Date.now},
    tutor : {
        type: Schema.Types.ObjectId, ref: 'Tutor'
    }
})

export default mongoose.model('Student', studentSchema);