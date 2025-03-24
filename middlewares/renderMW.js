//Render the page with the given parameters
module.exports = (objRepo, view) => {
    return (req, res, next) => {
        res.render(view,res.locals);
    }
}
