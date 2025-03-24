// Load the attendance of the user from the database
module.exports = (objRepo) => {
    return (req, res, next) => {
        res.locals.attendance = ['red', 'green', 'green', 'green', 'green', 'green', 'red', 'red'];
        res.locals.comments = ['Az első komment', 'A második komment', 'Mindkettő middleware-ből lett kiíratva'];
        res.locals.currentMonth = ['FEBRUÁR'];
        res.locals.currentYear = ['2025'];
        res.locals.absence = ['3'];
        return next();
    }
}
