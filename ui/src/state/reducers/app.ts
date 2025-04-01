import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface appState {
	display: boolean;
	officers: any[];
}

const initialState: appState = {
	display: false,
	officers: [],
};

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setDisplay: (state, action: PayloadAction<boolean>) => {
			state.display = action.payload;
		},
		updateOfficers: (state, action: PayloadAction<any[]>) => {
            state.officers = action.payload;
        },
	},
});

export const { setDisplay, updateOfficers } = appSlice.actions;

export default appSlice.reducer;
