import ProposalCard from "../components/ProposalCard.js";
import styles from "./css/Governance.module.css";
import React from "react";
import { newContextComponents } from "@drizzle/react-components";

const { ContractData } = newContextComponents;

const Governance = ({ drizzle, drizzleState }) => (
	<div className={styles.mainContainer}>
		<div className={styles.testContainer}>
			<h2>Governance Test</h2>
			<ContractData
				drizzle={drizzle}
				drizzleState={drizzleState}
				contract="Governance"
				method="electionDataArray"
				methodArgs={[1]}
			/>
			<ContractData
				drizzle={drizzle}
				drizzleState={drizzleState}
				contract="Governance"
				method="proposalCount"
			/>
			<button onClick={console.log(drizzleState)}>Log Drizzle</button>
		</div>
		<ProposalCard
			title={"Prop 1"}
			description={"Bla Bla Bla"}
			creator={"Aryan Chaudhary"}
			creationDate={"11/15/2021"}
		/>
		<ProposalCard
			title={"Prop 2"}
			description={"Bla bla"}
			creator={"Nolan Gelinas"}
			creationDate={"11/19/2021"}
		/>
	</div>
);

export default Governance;
