//Login the user
module.exports = (objRepo) => {
    return (req, res, next) => {
        req.session.counter = typeof req.session.counter === 'number' ? req.session.counter + 1 : 1;
        if (typeof req.body.password === 'undefined') {
            return next();
        }
        if (req.body.password === 'admin') {
            req.session.loggedIn = true;
            return res.redirect('/');
        }

        return next();
    }
}
