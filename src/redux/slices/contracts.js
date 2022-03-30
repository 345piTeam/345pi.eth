import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: {},
};

export const contractSlice = createSlice({
	name: "contractData",
	initialState,
	reducers: {
		setState: (state, action) => {
			state.data = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setState } = contractSlice.actions;

export default contractSlice.reducer;
