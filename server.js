var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// require("")(app);
// require("")(app);

app.listen(PORT, function() {
    console.log("app are listening on " + PORT);
});





