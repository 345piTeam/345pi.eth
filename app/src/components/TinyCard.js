import React from "react";
import styles from "./css/TinyCard.module";
import { Col, Row, Card, List, Button } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;
const tinyCardData = [
	{
		title: "TEST CARD 1",
	},
	{
		title: "TEST CARD 2",
		description:
			"It costs 200 345pi tokens to upgrade to a Duke OG. Modules cost only 0.5 tokens and you now have the ability to tip the top 5 Members on the leaderboard.",
	},
	{
		title: "Royalty",
	},
	{
		title: "Wizard",
	},
	{
		title: "Dark Lord",
	},
];

const TinyCard = () => {
	let ret = [];
	for (let i = 0; i < tinyCardData.length; i++) {
		ret.push(<SingleCard />);
	}
	return ret;
};

const SingleCard = () => {
	<div className={styles.singleCardContainer}></div>;
};

export default TinyCard;
