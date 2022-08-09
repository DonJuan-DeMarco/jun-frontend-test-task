import { configureStore } from '@reduxjs/toolkit';
import horseSlice from './horses';

const store = configureStore({
	reducer: {
		horses: horseSlice.reducer,
	},
});

export default store;
