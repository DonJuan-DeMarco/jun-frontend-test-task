import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './state';
import { reducers } from './reducers';

const mockSlice = createSlice({
	name: 'mockery',
	initialState,
	reducers,
});

export const mockActions = mockSlice.actions;
export default mockSlice;
