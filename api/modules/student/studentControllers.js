'use strict';

const mongoose = require('mongoose'),
    Student = mongoose.model('Student');

exports.get_students = (req,res) => {
    Student.find(req.params.tutorId, function(err, student) {
        if (err)
            res.send(err);
        res.json(student);
    }).limit(20);
}

exports.create_student = function(req, res) {
    let new_student = new Student(req.body);
    new_student.save(function(err,student){
        if(err) res.send(err);
        res.json(student);
    })
};


