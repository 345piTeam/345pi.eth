import React, { Component } from "react";
import { drizzleConnect } from "drizzle-react";

const mapStateToProps = (state) => ({ state });

class DrizzleDataDebug extends Component {
	render() {
		console.log(this.props);
		return <div>Election</div>;
	}
}

export default drizzleConnect(DrizzleDataDebug, mapStateToProps);
