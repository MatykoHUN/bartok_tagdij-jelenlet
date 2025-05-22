module.exports = (objRepo, view) => {
    return (req, res, next) => {
        res.render(view,res.locals);
    }
}
