import "./index.css";
import React, {useRef, useEffect} from "react";
import axios from "axios"

const Governance = () => {
    const propContract = useRef(null);

    useEffect(() => {
        const getProposalContract = async () => {
            const response = await axios.get("/contract-data");
            console.log(response.data.ProposalList.address);
        }

        getProposalContract().catch(console.error);
    }, [])


    return (
        <div className="mainContainer">
            <div className="card">
                GOV
            </div>
        </div>
    )
}

export default Governance;
