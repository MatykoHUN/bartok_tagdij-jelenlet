module.exports = function (objRepo) {
    return function (req, res, next) {
        if (typeof res.locals.group === 'undefined') {
            return next('Nincs betöltve a törlendő csoport!');
        }

        res.locals.group.deleteOne()
            .then(() => {
                return res.redirect('/groups');
            })
            .catch(err => next(err));
    };
};
