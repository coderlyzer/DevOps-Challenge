var express = require("express");
var slugRouter = require("./routes/slug");
var apiResponse = require("./helpers/apiResponse");


var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//Route Prefixes

app.use("/api/slug", slugRouter);

// throw 404 if URL not found
app.all("*", function(req, res) {
	return apiResponse.notFoundResponse(res, "Page not found");
});

app.listen(3000, () => {
	console.log("Server running on port 3000");
   });
module.exports = app;
