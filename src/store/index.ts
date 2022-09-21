import { configureStore } from '@reduxjs/toolkit';
import reducer  from './reducer';
import darkMode  from './darkMode';
import {actions as darkModeActions}  from './darkMode';

export const store = configureStore({
	reducer:{
		user: reducer,
		darkMode : darkMode,
	}
	//middleware: [...middlewares]
});


export type RootState = ReturnType<typeof store.getState>;
export const actions = {
	...darkModeActions
};

export default store;

