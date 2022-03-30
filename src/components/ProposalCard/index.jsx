import styles from "./index.module.css";
import React, {useState, useEffect } from "react";
import {ethers} from "ethers";
import {useSelector} from "react-redux";
import { Skeleton, Button } from "antd";

const ProposalCard = ({propData}) => {
    const contractData = useSelector((state) => state.contracts.ProposalList);
    const [proposalList, setProposalList] = useState();

    useEffect(() => {
        if(contractData) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
            setProposalList(new ethers.Contract(contractData.address, contractData.abi, signer));
        }
    }, [contractData])


	const Option = ({data, propIndex}) => {
		const vote = async (propId, optionId) => {
			if(window.ethereum && proposalList) {
				const provider = new ethers.providers.Web3Provider(window.ethereum);
				const gas = await provider.getGasPrice();
				const overrides = {
					gasPrice: gas,
					gasLimit: 8000000
				}
				await proposalList.vote(propId, optionId, overrides);
			}
		}
	
		return (
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
			<div className={styles.optionsCell}>
				<Button onClick={() => {vote(propIndex, data.id.toNumber())}}>Vote</Button>
			</div>
		</div>
	)};



	return propData ? (
		<div className={styles.proposalContainer}>
			<div className={styles.title}>
				{"[" + propData.id + "] " + propData.name}
				<p style={{"fontSize": "16px"}}>{propData.summary}</p>
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
					<div className={styles.optionsCellHeader + " " + styles.optionsCell}></div>
				</div>

				{
					propData.options?.map((d, index) => {
						return <Option data={d} propIndex={propData.id} key={index} />
					})
				}
			</div>
			<div className={styles.creator}>
				<p>CREATOR: {propData.creator}</p>
			</div>
		</div>
	) : <div className={styles.proposalContainer}>
			<Skeleton />
		</div>
};


export default ProposalCard;