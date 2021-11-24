import styles from "./css/ProposalCard.module.css";
import React from "react";
import { newContextComponents } from "@drizzle/react-components";

const { ContractData } = newContextComponents;

const Options = ({ drizzle, drizzleState, index }) => (
	<div className={styles.optionsRow}>
		<div className={styles.optionsCell}>
			<ContractData
				drizzle={drizzle}
				drizzleState={drizzleState}
				contract="Governance"
				method="getOptionName"
				methodArgs={[index]}
			/>
		</div>
		<div className={styles.optionsCell}>
			<ContractData
				drizzle={drizzle}
				drizzleState={drizzleState}
				contract="Governance"
				method="getOptionSummary"
				methodArgs={[index]}
			/>
		</div>
		<div className={styles.optionsCell}>
			<ContractData
				drizzle={drizzle}
				drizzleState={drizzleState}
				contract="Governance"
				method="getOptionVoteCount"
				methodArgs={[index]}
			/>
		</div>
	</div>
);

export default Options;
