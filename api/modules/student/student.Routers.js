'use strict';

module.exports = function(app) {
    const student = require('./studentControllers.js');

    app.route('/student')
        .post(student.create_student);

    app.route('/students/:tutorId')
        .get(student.get_students)
    
        

    console.log("\x1b[32m", "----------> tutor routers connected", "\x1b[37m");
};
