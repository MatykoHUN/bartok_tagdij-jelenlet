module.exports = function (objRepo) {
    return async function (req, res, next) {
        if (typeof res.locals.user === 'undefined') {
            return next('Nincs betöltve a törlendő felhasználó!');
        }

        try {
            await res.locals.user.deleteOne();
            return res.redirect('/admin');
        } catch (err) {
            return next(err);
        }
    };
};
