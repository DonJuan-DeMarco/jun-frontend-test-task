import { cleanup } from '@testing-library/react';
import { RandomColor } from '../randomColor';

const name = 'Princess Diana';

afterEach(() => {
	cleanup();
});

test('Should return converted HEX value', () => {
	expect(RandomColor(name)).toBe('2c34');
});
