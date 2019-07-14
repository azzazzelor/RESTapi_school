'use strict';

module.exports = function(app) {
    const tutor = require('./tutorControllers.js');

    app.route('/tutor')
        .post(tutor.create_tutor);

    app.route('/tutor/:schoolId')
        .get(tutor.get_tutors)
    
        

    console.log("\x1b[32m", "----------> tutor routers connected", "\x1b[37m");
};
