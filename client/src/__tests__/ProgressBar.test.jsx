import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProgressBar from '../components/ProgressBar';
import { RandomColor } from '../randomColor';
import store from '../store';

const { name, distance } = {
	name: 'Princess Diana',
	distance: 0,
};

afterEach(() => {
	cleanup();
});

test('Should render ProgressBar component', () => {
	render(
		<Provider store={store}>
			<ProgressBar
				key={0}
				name={name}
				bgcolor={RandomColor(name)}
				distance={distance}
			/>
		</Provider>
	);
	const buttonElement = screen.getByTestId(`progress-bar-${name}`);
	expect(buttonElement).toBeInTheDocument();
	expect(buttonElement).toHaveTextContent(`${name} run ${distance} meters`);
});
