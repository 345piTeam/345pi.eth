import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MoralisProvider, useMoralis } from "react-moralis";
import { store } from "../redux/store.js";
import { Provider, useDispatch } from "react-redux";
import axios from "axios";
import "antd/dist/antd.css";
import "./App.css";
import { setState } from "../redux/slices/contracts";

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

const Account = lazy(() => import("../pages/Account"));
const Homepage = lazy(() => import("../pages/Homepage"));
const Navbar = lazy(() => import("../components/Navbar"));
const Governance = lazy(() => import("../pages/Governance"));

const App = () => {
	const dispatch = useDispatch();
	const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
		useMoralis();

	useEffect(() => {
		const connectorId = window.localStorage.getItem("connectorId");
		if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
			enableWeb3({ provider: connectorId });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticated, isWeb3Enabled]);

	useEffect(() => {
		(async () => {
			let response = await axios.get("contract-data/rinkeby");
			response = response.data;
			dispatch(setState(response));
		})().catch((err) => {
			console.error(err);
		});
	}, [dispatch]);

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
		<Provider store={store}>
			<App />
		</Provider>
	</MoralisProvider>
);

export default AppContainer;
