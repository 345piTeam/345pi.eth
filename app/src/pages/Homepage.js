import styles from "./css/Homepage.module.css";
import React from "react";
import darkLord from "../images/characters/Darklord.png";
import wizard from "../images/characters/Wizard.png";
import pawn from "../images/characters/Pawn.png";
import dukeOG from "../images/characters/Duke OG.png";
import royalty from "../images/characters/Princess.png";
import { Col, Row, Card, List, Button } from "antd";
import { Link } from "react-router-dom";
import {
	WalletOutlined,
	LineChartOutlined,
	ExperimentOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
const data = [
	{
		title: "Member",
		description:
			"Receive 100 345pi tokens when you become a Member. Playing a module costs 0.75 tokens. Earn 100 tokens for reaching top 5 on a leaderboard. Every few games you may tip the module creator.",
		image: pawn,
	},
	{
		title: "Duke OG",
		description:
			"It costs 200 345pi tokens to upgrade to a Duke OG. Modules cost only 0.5 tokens and you now have the ability to tip the top 5 Members on the leaderboard.",
		image: dukeOG,
	},
	{
		title: "Ambassador",
		image: royalty,
	},
	{
		title: "Wizard",
		image: wizard,
	},
	{
		title: "Dark Lord",
		image: darkLord,
	},
];

const Homepage = () => (
	<div className={styles.mainContainer}>
		<div className={styles.backgroundContainer}>
			<div className={styles.sloganContainer}>
				<h1>
					Learn <b>Calculus.</b>
				</h1>
				<h1>
					Make A <b>Friend.</b>
				</h1>
			</div>
			<div className={styles.titleButtonContainer}>
				<Link to="/marketplace">
					<Button
						size="large"
						type="primary"
						style={{
							backgroundColor: "#3e466c",
							border: "none",
							height: "90px",
							fontSize: "40px",
							fontWeight: "bold",
						}}
					>
						Marketplace
					</Button>
				</Link>
				<a
					href={"https://discord.gg/3UwWPeqE3F"}
					target="_blank"
					rel="noreferrer"
				>
					<Button
						size="large"
						type="primary"
						style={{
							backgroundColor: "#3e466c",
							border: "none",
							height: "90px",
							fontSize: "40px",
							fontWeight: "bold",
						}}
					>
						Discord
					</Button>
				</a>
			</div>
		</div>

		<div className={styles.gameDescriptionContainer}>
			<Row className={styles.gameDescriptionRow}>
				<Col span={8}>
					<div className={styles.gameDescriptionCell}>
						<h2>Connect Your Digital Wallet</h2>
						<WalletOutlined style={{ fontSize: "8em", color: "white" }} />
					</div>
				</Col>
				<Col span={8}>
					<div className={styles.gameDescriptionCell}>
						<h2>Play Calculus Modules</h2>
						<LineChartOutlined style={{ fontSize: "8em", color: "white" }} />
					</div>
				</Col>
				<Col span={8}>
					<div className={styles.gameDescriptionCell}>
						<h2>Monetize Your Content</h2>
						<ExperimentOutlined style={{ fontSize: "8em", color: "white" }} />
					</div>
				</Col>
			</Row>
		</div>
		<div className={styles.characterDescriptionContainer}>
			<List
				grid={{
					gutter: [40, 40],
					xs: 1,
					sm: 2,
					md: 3,
					lg: 3,
					xl: 5,
					xxl: 5,
				}}
				dataSource={data}
				renderItem={(item) => (
					<List.Item>
						<Card cover={<img alt="example" src={item.image} />}>
							<Meta title={item.title} description={item.description} />
						</Card>
					</List.Item>
				)}
			/>
		</div>
	</div>
);

export default Homepage;
