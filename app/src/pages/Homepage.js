import styles from "./css/Homepage.module.css";
import React from "react";
import darkLord from "../images/characters/Darklord.png";
import { Avatar, Col, Row } from "antd";
import {
	WalletOutlined,
	LineChartOutlined,
	ExperimentOutlined,
} from "@ant-design/icons";

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
			<div className={styles.characterDescription}>
				<Avatar src={darkLord} id={styles.darkLord} shape="circle" size={64} />
				<div className={styles.description}>
					<b>Pawn:</b> description
				</div>
			</div>
		</div>
	</div>
);

export default Homepage;
