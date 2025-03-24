//Logout the user
module.exports = (objRepo) => {
    return (req, res, next) => {
        if (req.session.loggedIn = true) {
            req.session.loggedIn = false;
        }
        return next();
    }
}
