module.exports = function(app) {

  /**
   * [tweet GET - Provavelmente este método vai morrer]
   * @type {[type]}
   */
  app.get("/tweet/newtweet/:tweet?", function (req, res) {
    var tweet = req.params.tweet;
    var Twitter = require("../Services/Twitter/newTweet");
    Twitter.sendTweet(tweet);
    res.send(tweet);
  });

  /**
   * [tweet POST - Vai receber um POST com o parâmetro "Tweet" e vai repassar
   * a mensagem para a API do Twitter]
   * @type {[type]}
   */
  app.post("/tweet/newtweet/", function (req, res) {
    var tweet = req.body.tweet;
    if (tweet) {
      var Twitter = require("../Services/Twitter/newTweet");
      Twitter.sendTweet(tweet);
      res.send("Seu tweet: " + tweet + " foi enviado!");
    } else {
      res.send("Não informou o Tweet");
    }

  });

}
