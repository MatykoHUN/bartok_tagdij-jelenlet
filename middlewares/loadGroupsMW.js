module.exports = (objRepo) => {
    const groupModel = objRepo.groupModel;

    return (req, res, next) => {
        groupModel.find({})
            .then(groups => {
                res.locals.groups = groups;
                next();
            })
            .catch(err => next(err));
    };
};
