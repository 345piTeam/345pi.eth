import styles from "./css/Homepage.module.css";
import React from "react";

const Homepage = () => (
	<div className={styles.mainContainer}>
		<div className={styles.titleContainer}>
			<h1>
				Learn <b>Calculus.</b> Make A <b>Friend.</b>
			</h1>
		</div>
	</div>
);

export default Homepage;
