module.exports = (objrepo) => {
    const groupModel = objrepo.groupModel;

    return (req, res, next) => {
        if (req.user) {
            newGroup = req.group;
        } else {
            newGroup = new groupModel();
        }
        newGroup.name = req.body.name;
        newGroup.description = req.body.description;
        newGroup.summerActivity = !!req.body.summerActivity;

        //adatok adatbázisba írása
        return newGroup.save().then(() => {
            console.log("Új csoport elmentve:", newGroup);
            return res.redirect('/groups');
        }).catch(err => {
            next(err);
        });
    }
}