import React from "react";
import { DrizzleContext } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";
import drizzleOptions from "./drizzleOptions";
import Governance from "./pages/Governance";
import "./App.css";

import Homepage from "./pages/Homepage.js";
import Marketplace from "./pages/Marketplace";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const drizzle = new Drizzle(drizzleOptions);

const App = () => {
	return (
		<DrizzleContext.Provider drizzle={drizzle}>
			<DrizzleContext.Consumer>
				{(drizzleContext) => {
					const { drizzle, drizzleState, initialized } = drizzleContext;

					if (!initialized) {
						return "Loading...";
					}

					return <Governance drizzle={drizzle} drizzleState={drizzleState} />;
				}}
			</DrizzleContext.Consumer>
		</DrizzleContext.Provider>
	);
};

export default App;
