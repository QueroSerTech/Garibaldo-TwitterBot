
/**
 * Essa classe representa um Tweet
 */
class Tweet {

  /**
   * Classe construtora
   */
  constructor(Message) {
    this.message = Message;
    this.secret = {
      consumer_key: '',
      consumer_secret: '',
      access_token_key: '',
      access_token_secret: ''
    }
  }

  /**
   * Envia o Tweet para a API do Twitter
   * @return {[type]} [description]
   */
  function tweetar() {
    var Twitter = new TwitterPackage(this.secret);

    Twitter.post('statuses/update', {status: this.message},  function(error, tweet, response){
      if(error){
        console.log(error);
      }
      console.log(tweet);
      console.log(response);
    });
  }

}
"use strict";
module.exports = {
  tweetar : function(message) {
      var Twitter = new TwitterPackage(this.secret);
  }
};
