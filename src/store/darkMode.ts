import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: "darkMode",
	initialState: { value: false},
	reducers: {
		onAndOff: (state) => {
			state.value = !state.value;
		},
	},
});

export const { actions } = userSlice;
// export const { onAndOff } = userSlice.actions;
export default userSlice.reducer;

