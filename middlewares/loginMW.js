module.exports = (objRepo) => {
    return (req, res, next) => {
        if (typeof req.body.password === 'undefined') {
            return next();
        }

        if (req.body.password === 'admin' && req.body.email === 'admin') {
            req.session.loggedIn = true;
            return req.session.save(() => {
                return res.redirect('/admin');
            });
        }

        return res.redirect('/login?error=1');
    }
}

