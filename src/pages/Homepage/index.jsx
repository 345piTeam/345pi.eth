import React from "react";
import darkLord from "../../images/characters/Darklord.png";
import wizard from "../../images/characters/Wizard.png";
import pawn from "../../images/characters/Pawn.png";
import dukeOG from "../../images/characters/Duke OG.png";
import ambassador from "../../images/characters/Ambassador.png";
import { Col, Row, Card, List } from "antd";
import { Link } from "react-router-dom";
import {
	WalletOutlined,
	LineChartOutlined,
	ExperimentOutlined,
} from "@ant-design/icons";
import "./index.css";

const { Meta } = Card;
const data = [
	{
		title: "Member",
		description:
			"Purchasing a member NFT costs $20 USD equivalent in Eth. When you join, you will receive a customizable member NFT which will be used to identify you, as well as 100 345P tokens and 5 345G tokens. This NFT will save your player statistics and is not tradable. If you run out of 345P tokens and want to continue playing modules, you can earn more by creating your own modules or buying more from our treasury.",
		image: pawn,
	},
	{
		title: "Duke OG",
		description:
			"You can purchase a Duke OG NFT for $60 USD equivalent in Eth. Alternatively, you may refer 3 friends to join our community to earn this NFT. You will be awarded with 300 345P tokens and 15 345G tokens when you receive this NFT (note that 3rd-party exchanges do not count). These NFTs are tradable and can be customized.",
		image: dukeOG,
	},
	{
		title: "Ambassador",
		description:
			"The Ambassador NFT is acquired similarly to a Duke OG. You can purchase this NFT for $200 USD equivalent in Eth or you can refer 10 friends to the community. You will be awarded with 1000 345P tokens as well as 50 345G tokens. This NFT is also tradeable and can be customized. Additionally, you will gain an Ambassador Discord role which will give you access to Ambassador-only channels.",
		image: ambassador,
	},
	{
		title: "Wizard",
		description:
			"This is the highest level NFT a member can earn. Wizards represent the content creators of our community, and they also are the only members who can choose whether to liquidate the 345pi treasury using 345G tokens. To earn a wizard NFT, you must create successful modules which will earn you 345G tokens. Once you have earned 1000 345G tokens, you can purchase this NFT from 345pi and become a Wizard. Having the Wizard NFT in your wallet gives access to Wizard-only Discord channels and roles. This NFT is not tradeable; it can only be earned as a successful content creator on our platform.",
		image: wizard,
	},
	{
		title: "Dark Lord",
		description:
			"The Dark Lords are the initial owners and creators of the 345pi website and community. We manage the codebase, security, and treasury of the platform to ensure that everything runs smoothly for our members. Initially, the Dark Lords will collectively own 30% of the minted 345G tokens and will give out the remaining tokens through token drops and awards to creators. This will slowly but surely hand control of our game over to our community and eventually allow Wizards to outvote Dark Lords on treasury liquidation.",
		image: darkLord,
	},
];

const Homepage = () => (
	<div className="mainContainer">
		<div className="backgroundContainer">
			<div className="titleButtonContainer">
				<div className="titleButton">
					<a
						href={"https://discord.gg/3UwWPeqE3F"}
						target="_blank"
						rel="noreferrer"
					>
						<h1>Join Our Discord</h1>
					</a>
				</div>
				<div className="titleButton">
					<Link to="/modules">
						<h1>Play Calculus Modules</h1>
					</Link>
				</div>
			</div>
		</div>

		<div className="gameDescriptionContainer">
			<Row className="gameDescriptionRow">
				<Col span={8}>
					<div className="gameDescriptionCell">
						<h2>Connect Your Digital Wallet</h2>
						<WalletOutlined style={{ fontSize: "8em", color: "white" }} />
					</div>
				</Col>
				<Col span={8}>
					<div className="gameDescriptionCell">
						<h2>Play Calculus Modules</h2>
						<LineChartOutlined style={{ fontSize: "8em", color: "white" }} />
					</div>
				</Col>
				<Col span={8}>
					<div className="gameDescriptionCell">
						<h2>Monetize Your Content</h2>
						<ExperimentOutlined style={{ fontSize: "8em", color: "white" }} />
					</div>
				</Col>
			</Row>
		</div>
		<div className="characterDescriptionContainer">
			<div className="characterDescriptionTitleContainer">
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
