import ProposalCard from "../components/ProposalCard.js";
import styles from "./css/Governance.module.css";
import React from "react";

const Governance = ({ drizzle, drizzleState }) => (
	<div className={styles.mainContainer}>
		<ProposalCard drizzle={drizzle} drizzleState={drizzleState} />
		<ProposalCard drizzle={drizzle} drizzleState={drizzleState} />
		<ProposalCard drizzle={drizzle} drizzleState={drizzleState} />
		<ProposalCard drizzle={drizzle} drizzleState={drizzleState} />
		<ProposalCard drizzle={drizzle} drizzleState={drizzleState} />
	</div>
);

export default Governance;
