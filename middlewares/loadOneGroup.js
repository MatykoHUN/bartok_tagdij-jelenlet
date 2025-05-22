module.exports = function (objectRepository) {
    return function (req, res, next) {
        objectRepository.groupModel.findOne({ _id: req.params.id })
            .then(group => {
                if (!group) return next('Group not found');
                res.locals.group = group;
                return next();
            })
            .catch(err => next(err));
    };
};
