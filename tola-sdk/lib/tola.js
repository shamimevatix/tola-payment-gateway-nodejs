var Config, connect, errorTypes, version;

version = require("../package.json").version;

Config = require("./tola/config").Config;

TolaGateway = require("./tola/tola_gateway").TolaGateway;

connect = function(config) {
  return new TolaGateway(new Config(config));
};

exports.connect = connect;