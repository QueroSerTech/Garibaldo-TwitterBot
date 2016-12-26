var secret = {
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
}

var TwitterClient = require('twitter');

/**
 * Retorna o Objeto de configuração do Twitter
 * @todo {Pegar as configurações do Secret de um arquivo JSON}
 * @return {[object]} [Configurações do App do Twitter]
 */
function _getSecret() {
  return secret;
}

module.exports = {
  /**
   * Envia um novo Tweet
   * @todo {Deixar mais reutilizável e mais testável}
   * @param  {[type]} msg [description]
   * @return {[type]}     [description]
   */
  sendTweet : function (msg) {
    var Tweet = new TwitterClient(_getSecret());

    Tweet.post('statuses/update', {status: msg},  function(error, tweet, response){
      if(error){
        console.log(error);
      }
      console.log(tweet);
      console.log(response);
    });
  }
}
