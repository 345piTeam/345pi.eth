import React, { lazy, Suspense } from "react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MoralisProvider, useMoralis } from "react-moralis";
import "antd/dist/antd.css";
import "./App.css";

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

const Account = lazy(() => import("../pages/Account/index"));
const Homepage = lazy(() => import("../pages/Homepage/index"));
const Navbar = lazy(() => import("../components/Navbar/index"));
const Governance = lazy(() => import("../pages/Governance/index"));

const App = () => {
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
			<Suspense fallback={<div>loading... </div>}>
				<Navbar />
				<Routes>
					<Route strict path={"/"} element={<Homepage />} />
					<Route path={"/Governance"} element={<Governance />} />
					<Route path={"/Account"} element={<Account />} />
					<Route path={"*"} element={<PageNotFound />} />
				</Routes>
			</Suspense>
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
