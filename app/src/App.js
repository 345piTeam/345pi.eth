import "./App.css";
import React from "react";
import { DrizzleContext } from "@drizzle/react-plugin";
import Navbar from "./components/Navbar";
import Governance from "./pages/Governance";
import LoadingSpinner from "./components/LoadingSpinner";
import Homepage from "./pages/Homepage.js";
//import Marketplace from "./pages/Marketplace";
import TinyCardPage from "./pages/TinyCardPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "antd/dist/antd.css";

const App = () => (
	<DrizzleContext.Consumer>
		{(drizzleContext) => {
			const { initialized } = drizzleContext;

			return (
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route strict path={"/"} element={<Homepage />}></Route>
						<Route path={"/marketplace"} element={<TinyCardPage />}></Route>
						<Route
							path={"/governance"}
							element={initialized ? <Governance /> : <LoadingSpinner />}
						></Route>
						<Route path={"*"} element={<PageNotFound />}></Route>
					</Routes>
				</BrowserRouter>
			);
		}}
	</DrizzleContext.Consumer>
);

const PageNotFound = () => (
	<div>
		<h1>Page Not Found!</h1>
	</div>
);

export default App;
