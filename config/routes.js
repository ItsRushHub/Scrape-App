// Route that will bring in the scrape function from our scripts directory
var scrape = require("../scripts/scrape");


// Route that will bring in the headline and notes function from the controller
var headlinesController = require("../controllers/headlines");
var notesController = require("../controllers/notes");



module.exports = function(router) {
    // Home route
    router.get("/", function(req, res) {
        res.render("home");
    });

    // Saved route
    router.get("/saved", function(req, res) {
        res.render("saved");
    });

    router.get("/api/fetch", function(req, res) {
        headlinesController.fetch(function(err,docs) {
            if (!docs || docs.insertedCount === 0) {
                res.json({
                    message: "Sorry, there are no new articles. Check back later."
                });
            }
            else {
                res.json({
                    message: "Added" + docs.insertCount + "new updated articles!"
                });
            }
        });
    });
    router.get("/api/headlines", function(req, res) {
        var query = {};
        if (req.query.saved) {
            query = req.query;
        }
        headlinesController.get(query, function(data) {
            res.json(data);
        });
    });

    router.delete("/api/headlines/:id", function(req, res) {
        var query = {};
        query._id = req.params._id;
        headlinesController.delete(query, function(err, data) {
            res.json(data);
        });
    });

    router.patch("/api/headlines", function(req, res) {
        headlinesController.update(req.body, function(err, data) {
            res.json(data);
        });
    });

    router.get("/api/:headlines_id?", function(req, res) {
        var query = {};
        if (req.params.headline_id) {
            query_id = req.params.headline_id;
        }

        notesController.get(query, function(err, data) {
            res.json(data);
        });
    });

    router.delete("/api/notes/:id", function(req, res) {
        var query = {};
        query._id = req.params.id;
        notesController.delete(query, function(err, data) {
            res.json(data);
        });
    });

    router.post("/api/notes", function(req, res) {
        notesController.save(req.body, function(data) {
            res.json(data);
        });
    });
}