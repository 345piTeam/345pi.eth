import { configureStore } from "@reduxjs/toolkit";

import contractReducer from "./slices/contracts";

export const store = configureStore({
	reducer: {
		contract: contractReducer,
	},
});
