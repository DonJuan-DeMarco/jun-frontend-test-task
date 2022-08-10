import { configureStore } from '@reduxjs/toolkit';
import horseSlice from './horses';
import mockSlice from './mockery';

const store = configureStore({
	reducer: {
		horses: horseSlice.reducer,
		mock_store: mockSlice.reducer,
	},
});

export default store;
