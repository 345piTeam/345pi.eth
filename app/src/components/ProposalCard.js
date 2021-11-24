import styles from "./css/ProposalCard.module.css";
import { Button } from "antd";
import React from "react";
import { newContextComponents } from "@drizzle/react-components";

const { ContractData } = newContextComponents;

const ProposalCard = ({ drizzle, drizzleState }) => {
	const Options = ({ index }) => (
		<div className={styles.optionsRow}>
			<div className={styles.optionsName}>
				<button
					onClick={() => console.log(drizzle.contracts.Governance.methods)}
				>
					CLICK ME
				</button>
			</div>
			<div className={styles.optionsSummary}></div>
			<div className={styles.optionsVoteCount}></div>
		</div>
	);

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
			<div className={styles.optionsContainer}>
				<div className={styles.optionsRow}>
					<div className={styles.optionsName}>OPTION NAME</div>
					<div className={styles.optionsSummary}>SUMMARY</div>
					<div className={styles.optionsVoteCount}>15</div>
				</div>
				<ContractData
					drizzle={drizzle}
					drizzleState={drizzleState}
					contract="Governance"
					method="getOptionName"
					methodArgs={[0]}
				/>

				<Options index={0} />
			</div>
			<div className={styles.empty}></div>
			<div className={styles.inspect}>
				<Button className={styles.inspectButton} ghost={true}>
					Inspect
				</Button>
			</div>
		</div>
	);
};

export default ProposalCard;
