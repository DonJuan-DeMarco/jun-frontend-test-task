import { configureStore, createSlice } from '@reduxjs/toolkit';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Lineup from '../components/Lineup';
import { connectSocket } from '../socket';

afterEach(() => {
	cleanup();
});

const horseSlice = createSlice({
	name: 'horses',
	initialState: {
		list: [
			{
				name: 'Princess Diana',
				distance: 220,
			},
			{
				name: 'Cricket',
				distance: 33,
			},
		],
		finishOrder: ['Princess Diana', 'Cricket'],
	},
	reducers: {
		updateDistance(state, action) {
			state.list = action.payload;
		},
		finish(state, action) {
			state.finishOrder.push(action.payload);
		},
		reset(state) {
			state.finishOrder = [];
			state.list = [];
		},
	},
});

const store = configureStore({
	reducer: {
		horses: horseSlice.reducer,
	},
});
connectSocket();
test('Should render Lineup component', () => {
	render(
		<Provider store={store}>
			<Lineup />
		</Provider>
	);
	const lineupElement = screen.getByTestId('runningField');
	expect(lineupElement).toBeInTheDocument();
	const tree = renderer
		.create(
			<Provider store={store}>
				<Lineup />
			</Provider>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
	console.log(tree);
});
