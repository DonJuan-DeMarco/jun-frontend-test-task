import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RandomColor } from '../randomColor';
import { socket } from '../socket';
import { horseActions } from '../store/horses';
import ProgressBar from './ProgressBar';

const Lineup = () => {
	const dispatch = useDispatch();
	const horses = useSelector((state) => state.horses.list);
	const order = useSelector((state) => state.horses.finishOrder);

	useEffect(() => {
		if (horses.length === order.length && horses.length !== 0) {
			socket.disconnect();
		}
	}, [horses.length, order.length]);

	return (
		<div className='runningField' data-testid='runningField'>
			{horses.map((horse, i) => {
				if (
					horse.distance === 1000 &&
					(!order.length || order.indexOf(horse.name) < 0)
				) {
					dispatch(horseActions.finish(horse.name));
				}
				return (
					<ProgressBar
						key={i}
						name={horse.name}
						bgcolor={RandomColor(horse.name)}
						distance={horse.distance}
					/>
				);
			})}
		</div>
	);
};

export default Lineup;
