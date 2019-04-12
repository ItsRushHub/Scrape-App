module.exports = function(router) {
    // Home route
    router.get("/", function(req, res) {
        res.render("home");
    });

    // Saved route
    router.get("/saved", function(req, res) {
        res.render("saved");
    });
}