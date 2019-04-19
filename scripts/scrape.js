var request = require("request");
var cheerio = require("cheerio");


var scrape = function (cb) {

    request("https://www.usatoday.com", function(err, res, body) {
        
        var $ = cheerio.load(body);

        var articles = [];
        
        $(".asset.story.clearfix").each(function(i, element) {
            var head = $(this).children(".asset-headline.speakable-headline").text().trim();
            var sum = $(this).children(".p-text").text().trim();

            if(head && sum) {
                var dataToAdd = {
                    headline: headNeat,
                    summary: sumNeat
                };
                articles.push(dataToAdd);
            }
        });
        cb(articles);
    });
};

module.exports = scrape;