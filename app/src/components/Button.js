import React from "react";
import styles from "./css/Button.module.css";
import { MathComponent } from "mathjax-react";

const Button = ({ content }) => (
	<div className={styles.buttonContainer}>
		<MathComponent tex={content} />
	</div>
);

export default Button;
