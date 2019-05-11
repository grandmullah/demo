const Token = artifacts.require("EToken");

module.exports = function(deployer) {
  deployer.deploy(Token,1000000);
};
