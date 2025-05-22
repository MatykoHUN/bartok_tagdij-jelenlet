//Middleware-k
const loginMW = require('../middlewares/loginMW');
const logoutMW = require('../middlewares/logoutMW');
const renderMW = require('../middlewares/renderMW');
const loadUser = require('../middlewares/loadUser');
const renderAdmin = require('../middlewares/renderAdmin');
const authMW = require('../middlewares/authMW');
const saveuserMW = require('../middlewares/saveUser');
const deleteUser = require('../middlewares/deleteUser');
const loadUserByIDMW = require('../middlewares/loadUserByIDMW');
const loadGroupMW = require('../middlewares/loadGroupsMW');
const saveGroup = require('../middlewares/saveGroup');
const loadOneGroup = require('../middlewares/loadOneGroup');
const deleteGroup = require('../middlewares/deleteGroup');

//Adatbázis sémák
const userModel = require('../models/user');
const groupModel = require('../models/group');


function subscribeToRoutes(app) {
    const objRepo = { userModel: userModel, groupModel: groupModel }; 
    app.get('/', renderMW(objRepo, 'index.ejs'));
    app.get('/login', renderMW(objRepo, 'index.ejs'));
    app.post('/login', loginMW(objRepo));
    app.get('/logout', authMW(objRepo), logoutMW(objRepo));

    app.get('/admin', authMW(objRepo), loadUser(objRepo, 'admin.ejs'), renderAdmin(objRepo, 'admin.ejs'));
    app.get('/admin/new', authMW(objRepo), loadUser(objRepo), renderAdmin(objRepo, 'admin.ejs'));
    app.post('/admin/new', authMW(objRepo), saveuserMW(objRepo));

    app.get('/admin/edit/:id', authMW(objRepo), loadUserByIDMW(objRepo),loadUser(objRepo), renderMW(objRepo, 'editUser.ejs'));
    app.post('/admin/edit/:id', authMW(objRepo), loadUserByIDMW(objRepo), loadUser(objRepo), saveuserMW(objRepo));

    app.get('/admin/delete/:id', authMW(objRepo), loadUserByIDMW(objRepo), deleteUser(objRepo));

    app.get('/groups', authMW(objRepo), loadGroupMW(objRepo), renderMW(objRepo, 'groups.ejs'));
    app.get('/groups/new', authMW(objRepo), loadGroupMW(objRepo), renderMW(objRepo, 'groups.ejs'));
    app.post('/groups/new', authMW(objRepo), loadGroupMW(objRepo), saveGroup(objRepo));

    app.get('/groups/delete/:id', authMW(objRepo), loadOneGroup(objRepo), deleteGroup(objRepo));



    app.use((err, req, res, next) => {
        console.log(err);
        res.end("ajaj");
    })
}

module.exports = subscribeToRoutes;