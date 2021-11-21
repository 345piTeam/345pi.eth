import styles from "./css/ProposalCard.module.css";
import { Button } from "antd";

const ProposalCard = (props) => (
	<div className={styles.proposalContainer + " " + styles.gridContainer}>
		<div className={styles.title}>{props.title}</div>
		<div className={styles.creator}>{"CREATOR: " + props.creator}</div>
		<div className={styles.description}>{props.description}</div>
		<div className={styles.empty}></div>
		<div className={styles.inspect}>
			<Button className={styles.inspectButton} ghost={true}>
				Inspect
			</Button>
		</div>
	</div>
);

export default ProposalCard;
