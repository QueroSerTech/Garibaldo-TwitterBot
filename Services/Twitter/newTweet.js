
/**
 * Retorna o Objeto de configuração do Twitter
 * @todo {Pegar as configurações do Secret de um arquivo JSON}
 * @return {[object]} [Configurações do App do Twitter]
 */
function _getTwitter() {
  var Config = require("../../Configs/TwitterConfig");
  return Config.getApp();
}

module.exports = {
  /**
   * Envia um novo Tweet
   * @todo {Deixar mais reutilizável e mais testável}
   * @param  {[type]} msg [description]
   * @return {[type]}     [description]
   */
  sendTweet : function (msg) {
    var Tweet = _getTwitter();

    Tweet.post('statuses/update', {status: msg},  function(error, tweet, response){
      if(error){
        console.log(error);
      }
      console.log(tweet);
      console.log(response);
    });
  }
}
