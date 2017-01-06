var tola = require("./tola-sdk");

var tola_gateway = tola.connect({username: "username", password: "pass", baseUrl: "http://mycallbackurl"});
var params = {
    msisdn: "447XXXXXXXX1",
    description: "Sample description",
    amount: '10.00'
};
console.log(tola_gateway.pinRequest.send(params, pin_request_returned));


function pin_request_returned(err, response)
{
    console.log('pin_request_returned');
    console.log(err);
    console.log(response);
}



var params = {
    reference: "1.123.1474897199",
    pin: "4 digit number"
};
console.log(tola_gateway.chargeRequest.send(params, charge_request_returned));


function charge_request_returned(err, response)
{
    console.log('charge_request_returned');
    console.log(err);
    console.log(response);
}


var params = {
    msisdn: "447XXXXXXXX1",
    pin: "4 digit number"
};
console.log(tola_gateway.moChargeRequest.send(params, mo_charge_request_returned));


function mo_charge_request_returned(err, response)
{
    console.log('mo_charge_request_returned');
    console.log(err);
    console.log(response);
}