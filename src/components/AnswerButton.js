import React from "react";
import styles from "./css/AnswerButton.module.css";
import MathJax from "mathjax3-react";

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
			<MathJax.Provider
				url="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"
				options={{
					tex: {
						inlineMath: [
							["$", "$"],
							["\\(", "\\)"],
						],
					},
				}}
			>
				<MathJax.Formula formula={"$" + content + "$"} />
			</MathJax.Provider>
		</div>
	);
};

export default AnswerButton;
