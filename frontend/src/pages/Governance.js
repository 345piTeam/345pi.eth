import ProposalCard from "../components/ProposalCard.js";
import styles from "./css/Governance.module.css";

const Governance = () => (
	<div className={styles.mainContainer}>
		<ProposalCard
			title={"Prop 1"}
			description={"Bla Bla Bla"}
			creator={"Aryan Chaudhary"}
			creationDate={"11/15/2021"}
		/>
		<ProposalCard
			title={"Prop 2"}
			description={"Bla bla"}
			creator={"Nolan Gelinas"}
			creationDate={"11/19/2021"}
		/>
	</div>
);

export default Governance;
