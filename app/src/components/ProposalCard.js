import styles from "./css/ProposalCard.module.css";
import { Button } from "antd";
import React from "react";
import { newContextComponents } from "@drizzle/react-components";

const { ContractData } = newContextComponents;

let drizzle, drizzleState;

const ProposalCard = ({ drizzle, drizzleState }) => {
	drizzle = { drizzle };
	drizzleState = { drizzleState };
	return (
		<div className={styles.proposalContainer}>
			<div className={styles.title}>
				<ContractData
					drizzle={drizzle}
					drizzleState={drizzleState}
					contract="Governance"
					method="proposalTitle"
				/>
			</div>
			<div className={styles.optionsContainer}>
				<div className={styles.optionsRow + " " + styles.optionsRowHeader}>
					<div className={styles.optionsCell}>OPTION NAME</div>
					<div className={styles.optionsCell}>SUMMARY</div>
					<div className={styles.optionsCell}>VOTES</div>
				</div>
				<ContractData
					drizzle={drizzle}
					drizzleState={drizzleState}
					contract="Governance"
					method="optionCount"
					render={(optionCount) => {
						let ret = [];
						for (let i = 0; i < optionCount; i++) {
							ret.push(<Options index={i} />);
						}
						return ret;
					}}
				/>
			</div>
			<div className={styles.creator}>
				<p>
					CREATOR:{" "}
					<ContractData
						drizzle={drizzle}
						drizzleState={drizzleState}
						contract="Governance"
						method="getCreator"
					/>
				</p>
			</div>
			<div className={styles.inspect}>
				<Button className={styles.inspectButton} ghost={true}>
					Inspect
				</Button>
			</div>
		</div>
	);
};

const Options = ({ optionIndex }) => (
	<div className={styles.optionsRow}>
		<div className={styles.optionsCell}>
			<ContractData
				drizzle={drizzle}
				drizzleState={drizzleState}
				contract="Governance"
				method="getOptionName"
				methodArgs={[optionIndex]}
			/>
		</div>
		<div className={styles.optionsCell}>
			<ContractData
				drizzle={drizzle}
				drizzleState={drizzleState}
				contract="Governance"
				method="getOptionSummary"
				methodArgs={[optionIndex]}
			/>
		</div>
		<div className={styles.optionsCell}>
			<ContractData
				drizzle={drizzle}
				drizzleState={drizzleState}
				contract="Governance"
				method="getOptionVoteCount"
				methodArgs={[optionIndex]}
			/>
		</div>
	</div>
);

export default ProposalCard;
