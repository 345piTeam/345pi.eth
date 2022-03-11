import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";

async function connectToLogRocket(address) {
	LogRocket.identify(address, {
		name: null, // Add function to get the eth name of an address
	});

	// after calling LogRocket.init()
	setupLogRocketReact(LogRocket);
}

export default connectToLogRocket;
