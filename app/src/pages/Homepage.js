import styles from "./css/Homepage.module.css";
import React from "react";
import darkLord from "../images/characters/Darklord.png";

const Homepage = () => (
	<div className={styles.mainContainer}>
		<div className={styles.titleContainer}>
			<h1>
				Learn <b>Calculus.</b> Make A <b>Friend.</b>
			</h1>
		</div>
		<div className={styles.characterDescriptionContainer}>
			<div className={styles.characterDescription}>
				<div className={styles.characterImageContainer}>
					<img src={darkLord} alt="Dark Lord" id={styles.darkLord} />
				</div>
				<div className={styles.description}>
					<b>Pawn:</b> description
				</div>
			</div>
		</div>
	</div>
);

export default Homepage;
