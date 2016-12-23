module.exports = function(app) {

  var TwitterPackage = require('twitter');

  app.get("/tweet/:tweet?", function (req, res) {
    var tweet = req.params.tweet;
    "use strict";
    var Twitter = require("../Services/tweet.js");
  });

}
