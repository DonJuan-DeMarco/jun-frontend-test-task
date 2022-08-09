import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './state';
import { reducers } from './reducers';

const horseSlice = createSlice({
	name: 'horses',
	initialState,
	reducers,
});

export const horseActions = horseSlice.actions;
export default horseSlice;
