import "./App.css";
import React from "react";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import Navbar from "./components/Navbar";
//import Governance from "./pages/Governance";
import Homepage from "./pages/Homepage.js";
//import Marketplace from "./pages/Marketplace";
//import TinyCardPage from "./pages/TinyCardPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "antd/dist/antd.css";
import { MoralisProvider } from "react-moralis";

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

const App = () => {
	console.log(APP_ID);
	console.log(SERVER_URL);
	const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
		useMoralis();

	useEffect(() => {
		const connectorId = window.localStorage.getItem("connectorId");
		if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
			enableWeb3({ provider: connectorId });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticated, isWeb3Enabled]);

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route strict path={"/"} element={<Homepage />}></Route>
				{/* <Route path={"/modules"} element={<TinyCardPage />}></Route>
					<Route
						path={"/governance"}
						element={initialized ? <Governance /> : <LoadingSpinner />}
					></Route> */}
				<Route path={"*"} element={<PageNotFound />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

const PageNotFound = () => (
	<div>
		<h1>Page Not Found!</h1>
	</div>
);

const AppContainer = () => (
	<MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
		<App />
	</MoralisProvider>
);

export default AppContainer;
