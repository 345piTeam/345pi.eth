import "./index.css";
import React, {useState, useEffect} from "react";
import axios from "axios"
import {ethers} from "ethers";

const Governance = () => {
    const [proposalList, setProposalList] = useState();

    // Setup contract connection
    useEffect(() => {
        (async () => {
            const response = await axios.get("/contract-data");
            const contractData = response.data.ProposalList;
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            setProposalList(new ethers.Contract(contractData.address, contractData.abi, provider));
        })().catch(err => {
            console.error(err);
        });
    }, [])


    // Test print contract interactions
    useEffect(() => {
        (async () => {
            if(proposalList) {
                console.log(await proposalList.propCount());
            }
        })().catch(err => {
            console.error(err);
        });
    }, [proposalList])


    return (
        <div className="mainContainer">
            <div className="card">
                GOV
            </div>
        </div>
    )
}

export default Governance;
