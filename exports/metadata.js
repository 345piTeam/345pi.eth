require("dotenv").config();
let axios = require("axios");

let ipfsArray = [];
const api_key = process.env.MORALIS_API;

const data = ["nrg", "Ob-won", "arch0220", "Bowtruckleee"];

for (let i = 0; i < 4; i++) {
	ipfsArray.push({
		path: `metadata/${i}`,
		content: {
			image: `ipfs://Qmdbfb51FPd6BapvxZsU5STeXc7KZ96BkPU6M3nSZDB5Y8/images/${i}`,
			name: data[i],
			description: `id: ${i}`,
		},
	});
}
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
