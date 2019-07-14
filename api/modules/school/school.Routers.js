'use strict';

module.exports = function(app) {
    const school = require('./schoolControllers.js');

    app.route('/school')
        .post(school.create_school);

    
        

    console.log("\x1b[32m", "----------> tutor routers connected", "\x1b[37m");
};
