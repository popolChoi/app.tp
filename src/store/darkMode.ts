import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: "darkMode",
	initialState: { value: false},
	reducers: {
		onAndOff: (state) => {
			state.value = !state.value;
			if(state.value){
				document.documentElement.setAttribute('data-theme','dark');
			}else {
				document.documentElement.setAttribute('data-theme','light');
			}
		},
	},
});

export const { actions } = userSlice;
// export const { onAndOff } = userSlice.actions;
export default userSlice.reducer;

