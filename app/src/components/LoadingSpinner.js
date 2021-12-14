import { loadingContainer } from "./css/LoadingSpinner.module.css";
import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const LoadingSpinner = () => (
	<div className={loadingContainer}>
		<Spin indicator={<LoadingOutlined style={{ fontSize: 64 }} spin />} />
	</div>
);

export default LoadingSpinner;
