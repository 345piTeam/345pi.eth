import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
//import Governance from "./pages/Governance";
import LoadingSpinner from "./components/LoadingSpinner";
import Homepage from "./pages/Homepage.js";
//import Marketplace from "./pages/Marketplace";
//import TinyCardPage from "./pages/TinyCardPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "antd/dist/antd.css";
import Marketplace from "./pages/Marketplace";

const App = () => (
	<React.StrictMode>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route strict path={"/"} element={<Homepage />}></Route>
				{/* <Route path={"/modules"} element={<TinyCardPage />}></Route>
						<Route
							path={"/governance"}
							element={initialized ? <Governance /> : <LoadingSpinner />}
						></Route> */}
				{/*<Route path={"/marketplace"} element={<Marketplace />}></Route>*/}
				<Route path={"*"} element={<PageNotFound />}></Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

const PageNotFound = () => (
	<div>
		<h1>Page Not Found!</h1>
	</div>
);

export default App;
