import React, { useState } from "react";
import styles from "./css/AnswerButton.module.css";
import { MathComponent } from "mathjax-react";

const AnswerButton = ({ content, onAnswer }) => {
	const [clicked, setClicked] = useState(false);

	const clickHandler = () => {
		if (!clicked) {
			onAnswer();
		}
		setClicked(true);
	};

	return (
		<div className={styles.buttonContainer} onClick={clickHandler}>
			<MathComponent tex={content} />
		</div>
	);
};

export default AnswerButton;
