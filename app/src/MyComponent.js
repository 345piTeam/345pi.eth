import React from "react";
import { newContextComponents } from "@drizzle/react-components";

const { ContractData } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
	// destructure drizzle and drizzleState from props
	console.log(drizzle);
	return (
		<div className="section">
			<h2>Governance Test</h2>
			<ContractData
				drizzle={drizzle}
				drizzleState={drizzleState}
				contract="Governance"
				method="electionDataArray"
				methodArgs={[0]}
			/>
		</div>
	);
};
