'use strict';

const mongoose = require('mongoose'),
    Tutor = mongoose.model('Tutor');

exports.get_tutors = (req,res) => {
    Tutor.findById(req.params.schoolId, function(err, tutor) {
        if (err)
            res.send(err);
        res.json(tutor);
    });
}

exports.create_tutor = function(req, res) {
    let new_tutor = new Tutor(req.body);
    new_tutor.save(function(err,tutor){
        if(err) res.send(err);
        res.json(tutor);
    })
};


