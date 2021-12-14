import React from "react";
import { DrizzleContext } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";
import drizzleOptions from "./drizzleOptions";
import Governance from "./pages/Governance";
import LoadingSpinner from "./components/LoadingSpinner";
import "./App.css";
import Homepage from "./pages/Homepage.js";
import Marketplace from "./pages/Marketplace";
import TinyCardPage from "./pages/TinyCardPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "antd/dist/antd.css";

const drizzle = new Drizzle(drizzleOptions);

const App = () => {
	return (
		<DrizzleContext.Provider drizzle={drizzle}>
			<DrizzleContext.Consumer>
				{(drizzleContext) => {
					const { drizzle, drizzleState, initialized } = drizzleContext;

					if (!initialized) {
						//return
					}

					return (
						<BrowserRouter>
							<Navbar />
							<Routes>
								<Route path={"/"} element={<Homepage />}></Route>
								<Route path={"/home"} element={<Homepage />}></Route>
								<Route path={"/marketplace"} element={<TinyCardPage />}></Route>
								<Route
									path={"/governance"}
									element={
										initialized ? (
											<Governance
												drizzle={drizzle}
												drizzleState={drizzleState}
											/>
										) : (
											<LoadingSpinner />
										)
									}
								></Route>
								<Route path={"*"} element={<PageNotFound />}></Route>
							</Routes>
						</BrowserRouter>
					);
				}}
			</DrizzleContext.Consumer>
		</DrizzleContext.Provider>
	);
};

const PageNotFound = () => (
	<div>
		<h1>Page Not Found!</h1>
	</div>
);

export default App;
