const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

// create a GET route
app.get("/contract-data/:network", (req, res) => {
	res.sendFile(
		path.resolve(
			__dirname,
			"../data/contracts/" + req.params.network,
			"data.json"
		)
	);
});

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../build")));

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../build", "index.html"));
});

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));
