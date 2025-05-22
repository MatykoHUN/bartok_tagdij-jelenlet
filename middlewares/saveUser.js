module.exports = (objrepo) => {
    const usermodel = objrepo.userModel;

    return (req, res, next) => {
        if (req.user) {
            newuser = req.user;
        } else {
            newuser = new usermodel();
        }

        //kötelező adatok
        newuser.name = req.body.name;
        newuser.email = req.body.email;
        newuser.phone = req.body.phone;

        //nem kötelező adatok
        newuser.dateofbirth = req.body.dob;
        newuser.parentName = req.body.parentName;
        newuser.parentEmail = req.body.parentEmail;
        newuser.parentPhone = req.body.parentPhone;


        //csoport információk
        newuser.groups = req.body.groups;
        newuser.leaderInGroups = req.body.leaderGroups;
        newuser.isLeader = !!req.body.isLeader;
        newuser.isAdmin = !!req.body.isAdmin;

        //adatok adatbázisba írása
        return newuser.save().then(() => {
            console.log("új felhasználó elmentve:", newuser);
            return res.redirect('/admin');
        }).catch(err => {
            next(err);
        });
    }
}