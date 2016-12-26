module.exports = function(app) {

  app.get("/tweet/newtweet/:tweet?", function (req, res) {
    var tweet = req.params.tweet;
    var Twitter = require("../Services/Twitter/newTweet");
    console.log("Chegou na rota");
    Twitter.sendTweet(tweet);
    res.send(tweet);
  });

}
