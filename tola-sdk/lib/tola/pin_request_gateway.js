//@ sourceMappingURL=client_token_gateway.map
// Generated by CoffeeScript 1.6.1
var PinRequestGateway, DEFAULT_VERSION, ErrorResponse, Util, deprecate, exceptions, querystring;



Util = require('./util').Util;

exceptions = require('./exceptions');

querystring = require('querystring');


DEFAULT_VERSION = 2;

PinRequestGateway = (function(_super) {

  //__extends(PinRequestGateway, _super);

  function PinRequestGateway(gateway) {
    this.gateway = gateway;
    this.config = this.gateway.config;
  }

  PinRequestGateway.prototype.send = function(params, callback) {
    var err, responseHandler;
    if (params == null) {
      params = {};
    }
    //params = Object.assign(params, {operation: 'pinrequest'});

    params = Object.assign(params, {username: this.config.username, password: this.config.password, operation: 'pinrequest'});
    err = this.validateParams(params);
    if (err) return callback(err, null);
    responseHandler = this.responseHandler(callback);
    return this.gateway.http.post(this.config.baseUrl , params, responseHandler);
  };

  PinRequestGateway.prototype.validateParams = function(params) {
    var options, invalidOptions = [], decimal_regexp = /^\d+\.\d{2}$/;
    options = ["username", "password", "operation", "msisdn", "amount"];
    for(var i = 0; i < options.length; i++)
    {
      if(!params[options[i]])
        invalidOptions.push(options[i]);
    }

    if(params["amount"] && !decimal_regexp.test(params["amount"]))
      invalidOptions.push("amount");


    if(invalidOptions.length > 0)
      return exceptions.UnexpectedError("Invalid keys: " + invalidOptions.join(', '));
    else
      return null;
  };

  PinRequestGateway.prototype.responseHandler = function(callback) {
    return function(err, response) {
      var responseObj = querystring.parse(response);
      if (err)
        return callback(err, response);
      //validate response
      if(responseObj.resultcode === '0')
        return callback(null, responseObj);
      else
        return callback({msg: responseObj.description? responseObj.description : "Unknown error", tola_error: responseObj}, null);

    };
  };

  return PinRequestGateway;

})();
exports.PinRequestGateway = PinRequestGateway;