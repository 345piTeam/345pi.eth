import styles from "./css/ProposalCard.module.css";
import { Button } from "antd";
import React from "react";
import { newContextComponents } from "@drizzle/react-components";

const { ContractData } = newContextComponents;
let drizzle = null;
let drizzleState = null;

let globalDrizzle, globalDrizzleState;

const ProposalCard = ({ drizzle, drizzleState, propsalIndex }) => {
	globalDrizzle = drizzle;
	globalDrizzleState = drizzleState;
	return (
		<div className={styles.proposalContainer}>
			<div className={styles.title}>
				<ContractData
					drizzle={drizzle}
					drizzleState={drizzleState}
					contract="ProposalList"
					method="getName"
					methodArgs={[propsalIndex]}
				/>
			</div>
			<div className={styles.optionsContainer}>
				<div className={styles.optionsRow + " " + styles.optionsRowHeader}>
					<div className={styles.optionsCellHeader + " " + styles.optionsCell}>
						OPTION NAME
					</div>
					<div className={styles.optionsCellHeader + " " + styles.optionsCell}>
						SUMMARY
					</div>
					<div className={styles.optionsCellHeader + " " + styles.optionsCell}>
						VOTES
					</div>
				</div>

				{/*
				<ContractData
					drizzle={drizzle}
					drizzleState={drizzleState}
					contract="ProposalList"
					method="optionCount"
					render={(optionCount) => {
						let ret = [];
						for (let i = 0; i < optionCount; i++) {
							ret.push(<Options optionIndex={i} propIndex={} />);
						}
						return ret;
					}}
				/>

				*/}
			</div>
			<div className={styles.creator}>
				<p>CREATOR: </p>
				<ContractData
					drizzle={drizzle}
					drizzleState={drizzleState}
					contract="ProposalList"
					method="getCreator"
					methodArgs={[propsalIndex]}
				/>
			</div>
			<div className={styles.inspect}>
				<Button className={styles.inspectButton} ghost={true}>
					Inspect
				</Button>
			</div>
		</div>
	);
};

const Options = ({ propIndex, optionIndex }) => (
	<div className={styles.optionsRow}>
		<div className={styles.optionsCell}>
			<ContractData
				drizzle={globalDrizzle}
				drizzleState={globalDrizzleState}
				contract="ProposalCard"
				method="getOptionName"
				methodArgs={[propIndex, optionIndex]}
			/>
		</div>
		<div className={styles.optionsCell}>
			<ContractData
				drizzle={globalDrizzle}
				drizzleState={globalDrizzleState}
				contract="ProposalCard"
				method="getOptionSummary"
				methodArgs={[propIndex, optionIndex]}
			/>
		</div>
		<div className={styles.optionsCell}>
			<ContractData
				drizzle={globalDrizzle}
				drizzleState={globalDrizzleState}
				contract="ProposalCard"
				method="getOptionVoteCount"
				methodArgs={[propIndex, optionIndex]}
			/>
		</div>
	</div>
);

export default ProposalCard;
