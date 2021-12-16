import ProposalCard from "../components/ProposalCard.js";
import styles from "./css/Governance.module.css";
import React from "react";
import { newContextComponents } from "@drizzle/react-components";
import { DrizzleContext } from "@drizzle/react-plugin";

const { ContractData } = newContextComponents;

const Governance = () => (
	<DrizzleContext.Consumer>
		{(drizzleContext) => {
			const { drizzle, drizzleState } = drizzleContext;

			return (
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
										key={i}
									/>
								);
							}
							return ret;
						}}
					/>
				</div>
			);
		}}
	</DrizzleContext.Consumer>
);

export default Governance;
