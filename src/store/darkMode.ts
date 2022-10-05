import { createSlice } from '@reduxjs/toolkit';

export const defaultValue = true;

export const userSlice = createSlice({
	name: "darkMode",
	initialState: { value: defaultValue },
	reducers: {
		onAndOff: (state, action) => {
			state.value = action.payload;			
			if(state.value){
				document.documentElement.setAttribute('data-theme','dark');
			}else {
				document.documentElement.setAttribute('data-theme','light');
			}
		},
		onAndOffToggle: (state) => {
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

