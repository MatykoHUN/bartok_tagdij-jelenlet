const loadAttendanceMW = require('../middlewares/loadAttendanceMW');
const loadMembershipMW = require('../middlewares/loadMembershipMW');
const loginMW = require('../middlewares/loginMW');
const logoutMW = require('../middlewares/logoutMW');
const renderMW = require('../middlewares/renderMW');
const saveAttendanceMW = require('../middlewares/saveAttendanceMW');
const saveMembershipMW = require('../middlewares/saveMembershipMW');


function subscribeToRoutes(app) {
    const objRepo = {};

    app.get('/', loadMembershipMW(objRepo), renderMW(objRepo));
    app.get('/login', loginMW(objRepo));
    app.get('/logout', logoutMW(objRepo));
    app.get('/attendance/view/:id', loadAttendanceMW(objRepo), renderMW(objRepo));
    app.get('/attendance/comment/:id', loadAttendanceMW(objRepo), saveAttendanceMW(objRepo), renderMW(objRepo));
    app.get('/membership/pay/:id', loadMembershipMW(objRepo), saveMembershipMW(objRepo), renderMW(objRepo));

}

module.exports = subscribeToRoutes;