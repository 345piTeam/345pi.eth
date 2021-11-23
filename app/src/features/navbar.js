import { createSlice } from "@reduxjs/toolkit";

const initialStateVal = "home";

export const navbarSlice = createSlice({
	name: "navbar",
	initialState: { value: initialStateVal },
	reducers: {
		updateCurrent: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { updateCurrent } = navbarSlice.actions;
export default navbarSlice.reducer;
