var cargocharges
var firstFlight:number
var dtdc:number
const ffc:number=5
const dtdcc:number=10
var servicetax:any
servicetax=0.1

firstFlight=2*ffc;
var withouttaxdtdc=1*dtdcc
dtdc=(withouttaxdtdc)*servicetax+withouttaxdtdc
console.log("first flight " +firstFlight)
console.log("d t d c "+dtdc)