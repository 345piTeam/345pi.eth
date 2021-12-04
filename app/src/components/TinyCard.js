import React, { useState } from "react";
import styles from "./css/TinyCard.module.css";
import { Col, Row, Card, List, Button, Tabs, Image, Pagination } from "antd";
import { Link } from "react-router-dom";
import q1Image from "../images/tiny-card-data/tc1/question1Image.png";

const { TabPane } = Tabs;

const { Meta } = Card;
const tinyCardData = [
	{
		title: "Volume of a Cone",
		image: q1Image,
		question:
			"A container has the shape of an open right circular cone, as shown in the figure. The height of the container is 10cm and the diameter of the opening is 10cm. If the water is filled up to height h where h equals 5cm, which integral represents the total volume of water?",
		options: ["Option 1", "Option 2", "Option 3", "Option 4"],
	},
	{
		title: "TEST CARD 2",
		description:
			"It costs 200 345pi tokens to upgrade to a Duke OG. Modules cost only 0.5 tokens and you now have the ability to tip the top 5 Members on the leaderboard.",
	},
	{
		title: "TEST CARD 3",
	},
	{
		title: "TEST CARD 4",
	},
];

const correctMCAnswers = [1, 0, 2, 4];

const TinyCard = () => {
	const [currentQuestion, setCurrentQuestion] = useState(1);

	const SingleCard = ({ title, question, image }) => {
		return (
			<div className={styles.singleCardContainer}>
				<div className={styles.title}>
					<h2>
						<b>
							Question {currentQuestion}: {title}
						</b>
					</h2>
				</div>
				<div className={styles.content}>
					<Image src={image} width={400} />
					<div className={styles.rightSide}>
						<div className={styles.question}>
							<p>{question}</p>
						</div>
						<div className={styles.answers}></div>
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
	};

	return (
		<div className={styles.tinyCardContainer}>
			<SingleCard
				title={tinyCardData[currentQuestion - 1].title}
				question={tinyCardData[currentQuestion - 1].question}
				image={tinyCardData[currentQuestion - 1].image}
			/>
		</div>
	);
};

export default TinyCard;
