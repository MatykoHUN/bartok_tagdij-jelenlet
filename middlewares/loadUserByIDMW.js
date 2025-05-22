module.exports = (objRepo) => {
        const userModel = objRepo.userModel;
    return (req, res, next) => {
        return userModel.findOne({
            _id: req.params.id
        }).then((user) => {
            res.locals.user = user;
            req.user = user;
            return next();
        }).catch(err => {
            return next(err);
        });
    };
};
