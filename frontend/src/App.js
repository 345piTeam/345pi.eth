import styles from "./App.css";
import Homepage from "./pages/Homepage.js";
import Marketplace from "./pages/Marketplace";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Governance from "./pages/Governance";
import navbarReducer from "./features/navbar.js";
import electionReducer from "./features/election.js";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

//TODO: create reducer to store the current navbar in redux

const store = configureStore({
	reducer: {
		navbar: navbarReducer,
		election: electionReducer,
	},
});

const App = () => (
	<div className={styles.appContainer}>
		<Provider store={store}>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path={"/"} element={<Homepage />}></Route>
					<Route path={"/home"} element={<Homepage />}></Route>
					<Route path={"/marketplace"} element={<Marketplace />}></Route>
					<Route path={"/governance"} element={<Governance />}></Route>
					<Route path={"*"} element={<PageNotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</div>
);

const PageNotFound = () => (
	<div>
		<h1>Page Not Found!</h1>
	</div>
);

export default App;
