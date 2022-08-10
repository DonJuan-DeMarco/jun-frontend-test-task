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
		<button onClick={restart} className='connectionButton'>
			Restart
		</button>
	);
};

export default Button;
