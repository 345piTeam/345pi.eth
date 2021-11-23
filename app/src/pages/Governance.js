import ProposalCard from "../components/ProposalCard.js";
import styles from "./css/Governance.module.css";
import React from "react";

const Governance = ({ drizzle, drizzleState }) => (
	<div className={styles.mainContainer}>
		<ProposalCard drizzle={drizzle} drizzleState={drizzleState} index={0} />
		<ProposalCard drizzle={drizzle} drizzleState={drizzleState} index={1} />
	</div>
);

export default Governance;
