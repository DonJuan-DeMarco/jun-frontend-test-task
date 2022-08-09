export const reducers = {
	updateDistance(state, action) {
		state.list = action.payload;
	},
	finish(state, action) {
		state.finishOrder.push(action.payload);
	},
};
