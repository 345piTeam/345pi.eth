import { createSlice } from "@reduxjs/toolkit";

const initialStateVal = { web3Provider: null, contracts: {}, account: "0x0" };

export const electionSlice = createSlice({
	name: "election",
	initialState: { value: initialStateVal },
	reducers: {
		updateElectionData: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { updateElectionData } = electionSlice.actions;
export default electionSlice.reducer;
