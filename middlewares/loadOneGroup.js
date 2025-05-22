module.exports = function (objectRepository) {
    return async function (req, res, next) {
        try {
            const group = await objectRepository.groupModel.findOne({ _id: req.params.id });
            if (!group) return next('Group not found');
            res.locals.group = group;
            return next();
        } catch (err) {
            return next(err);
        }
    };
};
