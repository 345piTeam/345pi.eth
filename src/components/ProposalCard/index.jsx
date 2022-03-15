import styles from "./index.module.css";
import { Button, Skeleton } from "antd";
import React from "react";

const ProposalCard = ({propData}) => {
	return propData ? (
		<div className={styles.proposalContainer}>
			<div className={styles.title}>
				{propData.name}
				<p>{propData.summary}</p>
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

				{
					propData.options?.map((d, index) => {
						return <Option data={d} key={index} />
					})
				}
				
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
				{propData.creator}
			</div>
			{/* <div className={styles.inspect}>
				<Button className={styles.inspectButton} ghost={true}>
					Inspect
				</Button>
			</div> */}
		</div>
	) : <div className={styles.proposalContainer}>
			<Skeleton />
		</div>
};

// eslint-disable-next-line
const Option = ({data}) => (
	<div className={styles.optionsRow}>
		<div className={styles.optionsCell}>
			{data.name}
		</div>
		<div className={styles.optionsCell}>
			{data.summary}
		</div>
		<div className={styles.optionsCell}>
			{data.votes}
		</div>
	</div>
);


export default ProposalCard;