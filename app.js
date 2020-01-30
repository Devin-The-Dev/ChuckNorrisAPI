var unirest = require("unirest");

var req = unirest("GET", "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random");

req.headers({
    "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
    "x-rapidapi-key": "19c81e9004msh12d3e7d2a695630p1fd475jsnb5cf40c52ca7",
    "accept": "application/json"
});


req.end(function (res) {
    if (res.error) throw new Error(res.error);
    console.log(res.body.value);
});