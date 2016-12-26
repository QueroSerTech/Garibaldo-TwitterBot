
/**
 * [ConfigFile Arquivo Json de configuração]
 * @type {String}
 */
var ConfigFile = "./Json/twitterConfig.json";

/**
 * [_createConfig Lê o Json de configuração do Twitter]
 * @return {[type]} [description]
 */
function _createConfig() {
  var TwitterConfig = require(ConfigFile);
  return TwitterConfig;
}

module.exports = {

  /**
   * Retorna um client do Twitter configurado.
   * @return {[type]} [description]
   */
  getApp : function () {
    var TwitterClient = require('twitter');
    return new TwitterClient(_createConfig());
  }
}
