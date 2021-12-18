import React from "react";
import styles from "./css/AnswerButton.module.css";
import { MathComponent } from "mathjax-react";

const AnswerButton = ({ content, onAnswer, disabled }) => {
	const classGenerator = (disabled) => {
		let ret = [];
		ret.push(styles.buttonContainer);
		if (disabled) {
			ret.push(styles.disabled);
		}
		return ret.join(" ");
	};

	return (
		<div className={classGenerator(disabled)} onClick={onAnswer}>
			<MathComponent tex={content} />
		</div>
	);
};

export default AnswerButton;
