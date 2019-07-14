'use strict';

const mongoose = require('mongoose'),
    School = mongoose.model('School');



exports.create_school = function(req, res) {
    let new_school = new School(req.body);
    new_school.save(function(err,school){
        if(err) res.send(err);
        res.json(school);
    })
};


