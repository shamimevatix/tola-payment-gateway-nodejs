var TolaGateway, PinRequestGateway, ChargeRequestGateway, MoChargeRequestGateway, Http;

Http = require('./http').Http;

PinRequestGateway = require("./pin_request_gateway").PinRequestGateway;
ChargeRequestGateway = require("./charge_request_gateway").ChargeRequestGateway;
MoChargeRequestGateway = require("./mo_charge_request_gateway").MoChargeRequestGateway;

TolaGateway = (function() {

  function TolaGateway(config) {
    this.config 			= config;
    this.http 				= new Http(this.config);
    this.pinRequest 		= new PinRequestGateway(this);
    this.chargeRequest 		= new ChargeRequestGateway(this);
    this.moChargeRequest 	= new MoChargeRequestGateway(this);
  }

  return TolaGateway;

})();

exports.TolaGateway = TolaGateway;