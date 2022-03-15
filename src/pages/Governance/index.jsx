import styles from "./index.module.css";
import React, {useState, useEffect} from "react";
import axios from "axios"
import {ethers} from "ethers";
import ProposalCard from "../../components/ProposalCard";
import { Pagination } from "antd"


const data = {
    "DarkLord": {
        "abi": [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"a","type":"address"}],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"uri","type":"string"}],"name":"safeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],
        "address": "0x833ee817125Df6c8fda55D15a528ED4878f65B60"
    },
    "ProposalList": {
        "abi": [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"propId","type":"uint256"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_summary","type":"string"}],"name":"addOption","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"propId","type":"uint256"}],"name":"getOptions","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"voteCount","type":"uint256"},{"internalType":"address","name":"creator","type":"address"},{"internalType":"string","name":"summary","type":"string"}],"internalType":"struct ProposalList.Option[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getProposalData","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"propCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"a","type":"address"}],"name":"setDarkLordAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"propIndex","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"}],
        "address": "0xFf003fD78700483962617becA9430DfDCc0a6fC1"
    }
}

const Governance = () => {
    // Will be moved to context provider
    const [proposalList, setProposalList] = useState();
    const [proposalData, setProposalData] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
	const [proposalCount, setProposalCount] = useState(2);
	const [displayCount, setDisplayCount] = useState(5);

    // Setup contract connection
    // TODO: setup storage for contract in context provider
    // TODO: move section to account component (fire when isAthenticated)
    useEffect(() => {
        (async () => {
            let response;
            try {
                response = await axios.get("/contract-data");
                response = response.data;
            }
            catch(e) {
                // fallback to built-in data for testing
                // REMOVE FOR PRODUCTION
                response = data;
            }
            const contractData = response.ProposalList;
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            setProposalList(new ethers.Contract(contractData.address, contractData.abi, provider));
            
        })().catch(err => {
            console.error(err);
        });
    }, [])


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


    async function fetchProposals(minIndex, maxIndex) {
        if(!proposalList) {
            return null;
        }
        let ret = [];

        for(let i = minIndex; i < maxIndex; i++) {
            // Prevent reading proposal indecies that don't exist
            // only a problem if proposalCount < displayCount
            if(i >= proposalCount) {
                break;
            }

            const propResponse = await proposalList.getProposalData(i);
            if(!propResponse) {
                continue;
            }
            const optionResponse= await proposalList.getOptions(i);
            let prop = {};
            prop.name = propResponse[0];
            prop.id = i;
            prop.creator = propResponse[1];
            prop.summary = propResponse[2];
            prop.optionCount = propResponse[3].toString();
            let options = [];
            for(let j = 0; j < prop.optionCount; j++) {
                let tempOption = {};
                tempOption.id = j;
                tempOption.name = optionResponse[j].name;
                tempOption.summary = optionResponse[j].summary;
                tempOption.creator = optionResponse[j].creator;
                tempOption.votes = optionResponse[j].voteCount.toString();

                options.push(tempOption);
            }
            prop.options = options;
            ret.push(prop);
        }
        console.log(ret);
        setProposalData(ret);
    }


    const displayProposals = () => {
		const minIndex = currentPage * displayCount - displayCount;
		const maxIndex = currentPage * displayCount;
        
        fetchProposals(minIndex, maxIndex);

        let ret = proposalData?.map((d, index) =>
            index < maxIndex && index >= minIndex ? (
                <ProposalCard propData={d} key={index} />
            ) : null
        )
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
