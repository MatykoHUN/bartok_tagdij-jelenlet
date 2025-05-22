module.exports = function (objRepo) {
    return function (req, res, next) {
        if (typeof res.locals.user === 'undefined') {
            return next('Nincs betöltve a törlendő felhasználó!');
        }

        res.locals.user.deleteOne()
            .then(() => {
                return res.redirect('/admin');
            })
            .catch(err => next(err));
    };
};
