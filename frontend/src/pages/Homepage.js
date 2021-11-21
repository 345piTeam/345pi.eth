import DrizzleDataDebug from "../components/DrizzleDataDebug";
import styles from "./css/Homepage.module.css";

const Homepage = () => (
	<div className={styles.mainContainer}>
		<div className={styles.titleContainer}>
			<h1>
				Learn <b>Calculus.</b> Make A <b>Friend.</b>
			</h1>
			<DrizzleDataDebug />
		</div>
	</div>
);

export default Homepage;
