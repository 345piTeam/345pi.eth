import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";
if (window.XMLHttpRequest) {
	LogRocket.init("nirrdk/345pi");
}

async function connectToLogRocket(address) {
	// This is an example script - don't forget to change it!
	LogRocket.identify(address, {
		name: null, // Add function to get the eth name of an address
	});

	// after calling LogRocket.init()
	setupLogRocketReact(LogRocket);

	console.log("user " + address + " connected to log.rocket");
}

export default connectToLogRocket;
