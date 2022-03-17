import styles from "./index.module.css";
import React, {useState, useEffect } from "react";
import {ethers} from "ethers";
import ProposalCard from "../../components/ProposalCard";
import { Pagination } from "antd"
import { useDispatch } from "react-redux";
import { getContracts } from "../../redux/slices/contracts.js";


const Governance = () => {
    const dispatch = useDispatch();
    const [contractData, setContractData] = useState();
    const [proposalData, setProposalData] = useState(); 
    const [proposalList, setProposalList] = useState();
    const [currentPage, setCurrentPage] = useState(1);
	const [proposalCount, setProposalCount] = useState(2);
	const [displayCount, setDisplayCount] = useState(5);

    // Fetch contract data on mount
    useEffect(() => {
        (async () => {
            const data = await dispatch(getContracts());
            setContractData(data.payload.ProposalList);
        })().catch(console.error);
    }, [dispatch]);

    useEffect(() => {
        if(contractData) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            setProposalList(new ethers.Contract(contractData.address, contractData.abi, provider));
        }
    }, [contractData])

    // Set number of total proposals
    useEffect(() => {
        (async () => {
            if(proposalList) {
                setProposalCount(await proposalList.propCount())
            }
        })().catch(err => {
            console.error(err);
        });
    }, [proposalList])


    // Set proposalData
    useEffect(() => {
        (async () => {
            if(proposalList) {
                const minIndex = currentPage * displayCount - displayCount;
                const maxIndex = currentPage * displayCount;
                let ret = [];
        
                for(let i = minIndex; i < maxIndex; i++) {
                    // Prevent reading proposal indecies that don't exist
                    // only a problem if proposalCount < displayCount
                    if(i >= proposalCount) {
                        break;
                    }
        
                    const propResponse = await proposalList.getProposal(i);
                    if(!propResponse) {
                        continue;
                    }
                    const optionResponse= await proposalList.getOptions(i);
                    let prop = {};
                    prop.name = propResponse.name;
                    prop.id = i;
                    prop.creator = propResponse.creator;
                    prop.summary = propResponse.summary;
                    prop.optionCount = propResponse.optionCount.toString();
                    let options = [];
                    for(let j = 0; j < prop.optionCount; j++) {
                        let tempOption = {};
                        tempOption.id = optionResponse[j].id;
                        tempOption.name = optionResponse[j].name;
                        tempOption.summary = optionResponse[j].summary;
                        tempOption.creator = optionResponse[j].creator;
                        tempOption.votes = optionResponse[j].voteCount.toString();
        
                        options.push(tempOption);
                    }
                    prop.options = options;
                    ret.push(prop);
                }
                setProposalData(ret);
            }
        })().catch(err => {
            console.error(err);
        });
    }, [currentPage, displayCount, proposalCount, proposalList])

    const displayProposals = () => {
		const minIndex = currentPage * displayCount - displayCount;
		const maxIndex = currentPage * displayCount;

        let ret = proposalData?.map((d, index) =>
            index < maxIndex && index >= minIndex ? (
                <ProposalCard propData={d} key={index} />
            ) : null
        )
        
        // Display loading proposals if data is not ready
        if(ret === undefined) {
            return Array.apply(null, Array(3)).map((_d, index) => {
                return <ProposalCard propData={null} key={index}></ProposalCard>
            })
        }
		return ret;
	};


    return (
        <div className={styles.mainContainer}>
            {displayProposals()}
            <Pagination total={proposalCount}
				onChange={(page) => {
					setCurrentPage(page);
				}}
				onShowSizeChange={(current, size) => {
					setCurrentPage(current);
					setDisplayCount(size);
				}}
				defaultPageSize={5}
				showSizeChanger={true} />
        </div>
    )
}

export default Governance;
