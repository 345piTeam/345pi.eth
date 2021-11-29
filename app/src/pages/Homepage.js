import styles from "./css/Homepage.module.css";
import React from "react";
import darkLord from "../images/characters/Darklord.png";
import wizard from "../images/characters/Wizard.png";
import pawn from "../images/characters/Pawn.png";
import dukeOG from "../images/characters/Duke OG.png";
import princess from "../images/characters/Princess.png";
import { Avatar, Col, Row } from "antd";
import {
	WalletOutlined,
	LineChartOutlined,
	ExperimentOutlined,
} from "@ant-design/icons";

const characterDescriptionSpanSize = 7;

const Homepage = () => (
	<div className={styles.mainContainer}>
		<div className={styles.titleContainer}>
			<h1>
				Learn <b>Calculus.</b> Make A <b>Friend.</b>
			</h1>
		</div>
		<div className={styles.gameDescriptionContainer}>
			<Row className={styles.gameDescriptionRow}>
				<Col span={8}>
					<div className={styles.gameDescriptionCell}>
						<h2>Connect your eth wallet</h2>
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
						<h2>Become a creator</h2>
						<ExperimentOutlined style={{ fontSize: "8em", color: "white" }} />
					</div>
				</Col>
			</Row>
		</div>
		<div className={styles.characterDescriptionContainer}>
			<Row justify="space-around">
				<Col span={characterDescriptionSpanSize}>
					<CharacterCell image={pawn} name={"Pawn"} description={"desc"} />
				</Col>
				<Col span={characterDescriptionSpanSize}>
					<CharacterCell image={dukeOG} name={"Duke OG"} description={"desc"} />
				</Col>
				<Col span={characterDescriptionSpanSize}>
					<CharacterCell
						image={princess}
						name={"Royalty"}
						description={"desc"}
					/>
				</Col>
			</Row>
			<Row justify="center" gutter={36}>
				<Col span={characterDescriptionSpanSize + 1}>
					<CharacterCell
						image={darkLord}
						name={"Dark Lord"}
						description={"desc"}
					/>
				</Col>
				<Col span={characterDescriptionSpanSize + 1}>
					<CharacterCell image={wizard} name={"Wizard"} description={"desc"} />
				</Col>
			</Row>
		</div>
	</div>
);

const CharacterCell = ({ image, name, description }) => (
	<div className={styles.characterCell}>
		<Avatar src={image} id={styles.darkLord} shape="circle" size={256} />
		<div className={styles.description}>
			<p>
				<b>{name}: </b>
				{description}
			</p>
		</div>
	</div>
);

export default Homepage;
