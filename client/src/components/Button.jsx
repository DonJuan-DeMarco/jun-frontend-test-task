import { startSocket } from '../socket';
import { useDispatch } from 'react-redux';
import { horseActions } from '../store/horses';

const Button = () => {
	const dispatch = useDispatch();

	const restart = () => {
		startSocket();
		dispatch(horseActions.reset());
	};

	return (
		<button
			data-testid='button-1'
			onClick={restart}
			className='connectionButton'
		>
			Restart
		</button>
	);
};

export default Button;
