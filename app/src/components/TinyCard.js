import React, { useState } from "react";
import styles from "./css/TinyCard.module.css";
import { List, Image, Pagination } from "antd";
import q1Image from "../images/tiny-card-data/tc1/question1Image.png";
import q2Image from "../images/tiny-card-data/tc1/question2Image.png";
import q3Image from "../images/tiny-card-data/tc1/question3Image.png";
import AnswerButton from "./AnswerButton";

const tinyCardData = [
	{
		title: "Volume of a Cone",
		image: q1Image,
		question:
			"A container has the shape of an open right circular cone, as shown in the figure. The height of the container is 10cm and the diameter of the opening is 10cm. If the water is filled up to height h where h equals 5cm, which integral represents the total volume of water?",
		options: [
			String.raw`\int_{0}^{5}\pi\left(\frac{x}{2}\right)^{2}dx`,
			String.raw`\int_{0}^{10}\pi\left(\frac{x}{2}\right)^{2}dx`,
			String.raw`\int_{0}^{5}\pi\left(\frac{x}{3}\right)^{2}dx`,
			String.raw`\int_{0}^{10}\pi\left(x\right)^{2}dx`,
		],
		answer: String.raw`\int_{0}^{10}\pi\left(x\right)^{2}dx`,
		answered: false,
	},
	{
		title: "First and Second Derivatives",
		image: q2Image,
		question:
			"If y is a function of x such that y' > 0 for all x and y'' < 0 for all x, which of the following could be part of the graph of y = f(x)?",
		options: ["A", "B", "C", "D", "E"],
		answer: "B",
		answered: false,
	},
	{
		title: "Polar Integration",
		image: q3Image,
		question:
			"Express the area enclosed by r = 5 - 5sin(theta) as an integral.",
		options: [
			String.raw`\frac{1}{2}\int_{0}^{2\pi}[5-5\sin\theta]^{2}d\theta`,
			String.raw`\int_{0}^{2\pi}[5-5\sin\theta]^{2}d\theta`,
			String.raw`\frac{1}{2}\int_{0}^{2\pi}[5-5\sin\theta]d\theta`,
			String.raw`\frac{1}{2}\int_{0}^{2\pi}[5^{2}-5^{2}\sin^{2}\theta]d\theta`,
			String.raw`\text{None of the above}`,
		],
		answer: String.raw`\frac{1}{2}\int_{0}^{2\pi}[5-5\sin\theta]^{2}d\theta`,
		answered: false,
	},
];

const TinyCard = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const clickAnswerHandler = (e) => {
		if (tinyCardData[currentQuestion].answered) return;
		if (e === tinyCardData[currentQuestion].answer) {
			setScore(score + 1);
		}
		tinyCardData[currentQuestion].answered = true;
		setCurrentQuestion(currentQuestion + 1);
	};

	const SingleCard = ({ title, question, image, options, answered }) => (
		<div className={styles.singleCardContainer}>
			<div className={styles.title}>
				<h2>
					Question {currentQuestion + 1}: {title}
				</h2>
				<h2>Score: {score}</h2>
			</div>
			<div className={styles.content}>
				<Image src={image} width={400} />
				<div className={styles.rightSide}>
					<div className={styles.question}>
						<div>{question}</div>
					</div>
					<div className={styles.answerBank}>
						<List
							grid={{
								gutter: 16,
								xs: 1,
								sm: 2,
								md: 2,
								lg: 3,
								xl: 4,
								xxl: 3,
							}}
							dataSource={options}
							renderItem={(item) => (
								<List.Item>
									<AnswerButton
										content={item}
										onAnswer={() => clickAnswerHandler(item)}
										disabled={answered}
									/>
								</List.Item>
							)}
						/>
					</div>
				</div>
			</div>
			<footer className={styles.footer}>
				<Pagination
					current={currentQuestion}
					onChange={setCurrentQuestion}
					responsive={true}
					total={10 * tinyCardData.length}
				/>
			</footer>
		</div>
	);

	return (
		<div className={styles.tinyCardContainer}>
			<SingleCard
				title={tinyCardData[currentQuestion].title}
				question={tinyCardData[currentQuestion].question}
				image={tinyCardData[currentQuestion].image}
				options={tinyCardData[currentQuestion].options}
				answered={tinyCardData[currentQuestion].answered}
			/>
		</div>
	);
};

export default TinyCard;
