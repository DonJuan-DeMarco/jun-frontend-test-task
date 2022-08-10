import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import Button from '../components/Button';
import store from '../store';

afterEach(() => {
	cleanup();
});

test('Should render Button component', () => {
	render(
		<Provider store={store}>
			<Button />
		</Provider>
	);
	const buttonElement = screen.getByTestId('button-1');
	expect(buttonElement).toBeInTheDocument();
	expect(buttonElement).toHaveTextContent('Restart');
});
