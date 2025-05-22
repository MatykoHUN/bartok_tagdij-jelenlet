module.exports = (objRepo, view) => {
    return (req, res, next) => {
        if (req.session.loggedIn) {
            return next();
        }
        return res.redirect('/login');
    };
}
