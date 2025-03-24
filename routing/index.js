const loadAttendanceMW = require('../middlewares/loadAttendanceMW');
const loadMembershipMW = require('../middlewares/loadMembershipMW');
const loginMW = require('../middlewares/loginMW');
const logoutMW = require('../middlewares/logoutMW');
const renderMW = require('../middlewares/renderMW');
const saveAttendanceMW = require('../middlewares/saveAttendanceMW');
const saveMembershipMW = require('../middlewares/saveMembershipMW');


function subscribeToRoutes(app) {
    const objRepo = {};

    app.get('/', loadMembershipMW(objRepo), renderMW(objRepo, 'tagdij.ejs'));
    app.get('/login', loginMW(objRepo), renderMW(objRepo, 'index.ejs'));
    app.get('/logout', logoutMW(objRepo), renderMW(objRepo, 'index.ejs'));
    app.get('/attendance/view/:id', loadAttendanceMW(objRepo), renderMW(objRepo,'jelenlet.ejs'));
    app.get('/attendance/comment/:id', loadAttendanceMW(objRepo), saveAttendanceMW(objRepo), renderMW(objRepo, 'jelenlet.ejs'));
    app.get('/membership/pay/:id', loadMembershipMW(objRepo), saveMembershipMW(objRepo), renderMW(objRepo, 'tagdij.ejs'));

}

module.exports = subscribeToRoutes;