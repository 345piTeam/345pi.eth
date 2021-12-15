import React, { useState } from "react";
import styles from "./css/TinyCard.module.css";
import { List, Image, Pagination } from "antd";
import { Link } from "react-router-dom";
import q1Image from "../images/tiny-card-data/tc1/question1Image.png";
import q2Image from "../images/tiny-card-data/tc1/question2Image.png";
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
		title: "TEST CARD 2",
		image: q2Image,
		question:
			"If y is a function of x such that y' > 0 for all x and y'' < 0 for all x, which of the following could be part of the graph of y = f(x)?",
		options: ["A", "B", "C", "D", "E"],
		answer: "B",
		answered: false,
	},
	{
		title: "TEST CARD 3",
		answered: false,
	},
	{
		title: "TEST CARD 4",
		answered: false,
	},
];

const TinyCard = () => {
	const [currentQuestion, setCurrentQuestion] = useState(1);
	const [score, setScore] = useState(0);
	const clickAnswerHandler = (e) => {
		if (tinyCardData[currentQuestion - 1].answered) return;
		if (e === tinyCardData[currentQuestion - 1].answer) {
			setScore(score + 1);
		}
		tinyCardData[currentQuestion - 1].answered = true;
		setCurrentQuestion(currentQuestion + 1);
	};

	const SingleCard = ({ title, question, image, options, answered }) => (
		<div className={styles.singleCardContainer}>
			<div className={styles.title}>
				<h2>
					Question {currentQuestion}: {title}
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
				title={tinyCardData[currentQuestion - 1].title}
				question={tinyCardData[currentQuestion - 1].question}
				image={tinyCardData[currentQuestion - 1].image}
				options={tinyCardData[currentQuestion - 1].options}
				answered={tinyCardData[currentQuestion - 1].answered}
			/>
		</div>
	);
};

export default TinyCard;
