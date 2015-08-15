

// Parsing using node.js
var https = require("https");
var username = "johndoe";

function printMessage(username, badgeCount, points) {
    var message = username + " has " + badgeCount + " total badges and " + points + " points in Javascript";
    console.log(message);
}

printMessage("John", 1000, 2000000);
//

var request = https.get("https://sampletestdata.herokuapp.com/js/" + username + ".json", function(response) {
    console.log(response.statusCode);
});

request.on("error", function(error) {
   console.error(error.message);
});
