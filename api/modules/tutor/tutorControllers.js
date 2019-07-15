'use strict';

const mongoose = require('mongoose'),
    Tutor = mongoose.model('Tutor');

exports.get_tutors = (req,res) => {
    Tutor.find(req.params.tutorId, function(err, tutor) {
        if (err.message && ~err.message.indexOf('Cast to ObjectId failed')) {
            res.sendStatus(404)
          }
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


