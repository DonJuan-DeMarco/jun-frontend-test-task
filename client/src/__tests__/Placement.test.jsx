import { render, screen, cleanup } from '@testing-library/react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Placement from '../components/Placement';
import store from '../store';

afterEach(() => {
	cleanup();
});

test('Should render ProgressBar component', () => {
	render(
		<Provider store={store}>
			<Placement />
		</Provider>
	);
	const placementElement = screen.getByTestId('placement');
	expect(placementElement).toBeInTheDocument();
});
