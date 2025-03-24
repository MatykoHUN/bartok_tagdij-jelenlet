// Load the membership data of the user from the database
module.exports = (objRepo) => {
    return (req, res, next) => {
        res.locals.paid2025 = ['paid', 'paid', 'paid', 'unpaid', 'unpaid', 'unpaid', 'future', 'paid', 'paid', 'paid', 'future', 'paid'];
        res.locals.paid2024 = ['paid', 'paid', 'paid', 'unpaid', 'unpaid', 'unpaid', 'future', 'paid', 'paid', 'paid', 'future', 'paid'];
        res.locals.paid2023 = ['paid', 'paid', 'paid', 'unpaid', 'unpaid', 'unpaid', 'future', 'paid', 'paid', 'paid', 'future', 'paid'];
        return next();
    }
}
