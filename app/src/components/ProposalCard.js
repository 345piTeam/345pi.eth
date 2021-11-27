import styles from "./css/ProposalCard.module.css";
import { Button } from "antd";
import React from "react";
import { newContextComponents } from "@drizzle/react-components";

const { ContractData } = newContextComponents;

const ProposalCard = ({ drizzle, drizzleState, index }) => (
	<div className={styles.proposalContainer + " " + styles.gridContainer}>
		<div className={styles.title}>
			<ContractData
				drizzle={drizzle}
				drizzleState={drizzleState}
				contract="ProposalList"
				method="getName"
				methodArgs={[index]}
			/>
		</div>
		<div className={styles.creator}>
			<p>
				CREATOR:{" "}
				<ContractData
					drizzle={drizzle}
					drizzleState={drizzleState}
					contract="ProposalList"
					method="getCreator"
					methodArgs={[index]}
				/>
			</p>
		</div>
		<div className={styles.description}>
			<ContractData
				drizzle={drizzle}
				drizzleState={drizzleState}
				contract="ProposalList"
				method="getSummary"
				methodArgs={[index]}
			/>
		</div>
		<div className={styles.empty}></div>
		<div className={styles.inspect}>
			<Button className={styles.inspectButton} ghost={true}>
				Inspect
			</Button>
		</div>
	</div>
);

export default ProposalCard;
