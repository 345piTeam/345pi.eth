import ProposalCard from "../components/ProposalCard.js";
import styles from "./css/Governance.module.css";
import React from "react";
import { newContextComponents } from "@drizzle/react-components";

const { ContractData } = newContextComponents;

const Governance = ({ drizzle, drizzleState }) => (
	<div className={styles.mainContainer}>
		<ContractData
			drizzle={drizzle}
			drizzleState={drizzleState}
			contract="ProposalList"
			method="propCount"
			render={(propCount) => {
				let ret = [];
				for (let i = 0; i < propCount; i++) {
					ret.push(
						<ProposalCard
							drizzle={drizzle}
							drizzleState={drizzleState}
							propsalIndex={i}
						/>
					);
				}
				return ret;
			}}
		/>
	</div>
);

export default Governance;
