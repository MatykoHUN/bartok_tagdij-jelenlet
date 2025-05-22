module.exports = (objRepo) => {
    const userModel = objRepo.userModel;
    const groupModel = objRepo.groupModel;

    return (req, res, next) => {
        userModel.find({})
            .populate('groups')
            .populate('leaderInGroups')
            .then(users => {
                return groupModel.find()
                    .then(groups => {
                        res.locals.users = users;
                        res.locals.groups = groups;
                        next();
                    });
            })
            .catch(err => next(err));
    };

}