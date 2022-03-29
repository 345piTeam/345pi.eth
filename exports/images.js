require("dotenv").config();
let fs = require("fs");
let axios = require("axios");

let ipfsArray = [];
let promises = [];
const api_key = process.env.MORALIS_API;

for (let i = 0; i < 4; i++) {
	promises.push(
		new Promise((res, rej) => {
			fs.readFile(`${__dirname}/${i}.png`, (err, data) => {
				if (err) rej();
				ipfsArray.push({
					path: `images/${i}`,
					content: data.toString("base64"),
				});
				res();
			});
		})
	);
}

Promise.all(promises).then(() => {
	axios
		.post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
			headers: {
				"X-API-KEY": api_key,
				"Content-Type": "application/json",
				accept: "application/json",
			},
		})
		.then((res) => {
			console.log(res.data);
		})
		.catch((error) => {
			console.log(error);
		});
});
