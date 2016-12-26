
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
  getConfig : function () {
    return _createConfig();
  }
}
