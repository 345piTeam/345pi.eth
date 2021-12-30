import styles from "./css/Homepage.module.css";
import React from "react";
import darkLord from "../images/characters/Darklord.png";
import wizard from "../images/characters/Wizard.png";
import pawn from "../images/characters/Pawn.png";
import dukeOG from "../images/characters/Duke OG.png";
import ambassador from "../images/characters/Ambassador.png";
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
			"When you decide to join the 345pi community, you will receive a customizable member NFT which will be used to identify you, as well as 100 345P tokens. This NFT will save your player statistics and is not tradable. You will not be allowed to convert 345P tokens back to eth for 1 year to help build our community.",
		image: pawn,
	},
	{
		title: "Duke OG",
		description:
			"You can purchase a Duke OG NFT for 300 345P tokens or by bringing in 3 friends to the 345pi community. These NFTs are tradable, can be customized, and allow you to play calculus modules for less tokens per game.",
		image: dukeOG,
	},
	{
		title: "Ambassador",
		description:
			"Earn a customizable Ambassador NFT by bringing in 10 friends to the game. This NFT is tradable and allows you to play modules for even less tokens per game than with a Duke OG NFT (does not stack).",
		image: ambassador,
	},
	{
		title: "Wizard",
		description:
			"This is the highest level NFT a user can earn. Wizards are the content creators for our community, and they also can choose which new modules will be added to the game. To earn a wizard NFT, you must create a module that gets at least 500 likes. When you received the Wizard NFT, you will also receive 100 345G tokens, which allow you to vote on changes to the games core mechanics.",
		image: wizard,
	},
	{
		title: "Dark Lord",
		description:
			"The Dark Lords are the initial owners and creators of the 345pi website and community. We manage the codebase, security, and treasury of the platform to ensure that everything runs smoothly for our members. As time progresses, the Dark Lords will give out 70% of the minted 345G tokens through token drops, which will slowly but surely hand control of our game over to our community.",
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
							borderRadius: "50px",
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
							borderRadius: "50px",
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
			<div className={styles.characterDescriptionTitleContainer}>
				<h1>CHARACTER NFTS</h1>
			</div>
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
