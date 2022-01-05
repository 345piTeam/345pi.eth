import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Governance from "./pages/Governance";
import LoadingSpinner from "./components/LoadingSpinner";
import Homepage from "./pages/Homepage.js";
//import Marketplace from "./pages/Marketplace";
import TinyCardPage from "./pages/TinyCardPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "antd/dist/antd.css";
import { Drizzle, generateStore } from "@drizzle/store";
import { DrizzleContext } from "@drizzle/react-plugin";
import drizzleOptions from "./drizzleOptions";

const drizzleStore = generateStore(drizzleOptions);
const drizzle = new Drizzle(drizzleOptions, drizzleStore);

const App = () => (
	<React.StrictMode>
		<DrizzleContext.Provider drizzle={drizzle}>
			<DrizzleContext.Consumer>
				{(drizzleContext) => {
					const { initialized } = drizzleContext;

					return (
						<BrowserRouter>
							<Navbar />
							<Routes>
								<Route strict path={"/"} element={<Homepage />}></Route>
								<Route path={"/modules"} element={<TinyCardPage />}></Route>
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
		</DrizzleContext.Provider>
	</React.StrictMode>
);

const PageNotFound = () => (
	<div>
		<h1>Page Not Found!</h1>
	</div>
);

export default App;
