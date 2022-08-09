import { useDispatch, useSelector } from 'react-redux';
import { horseActions } from '../store/horses';

const Horse = () => {
	const dispatch = useDispatch();
	const horses = useSelector((state) => state.horses.list);
	const order = useSelector((state) => state.horses.finishOrder);

	console.log(horses);
	return (
		<>
			{horses.map((horse) => {
				if (horse.distance === 1000 && order.indexOf(horse.name) < 0) {
					dispatch(horseActions.finish(horse.name));
				}
				return (
					<div
						key={horse.name}
						className={`${horse.name
							.toLowerCase()
							.replace(/\s/g, '-')}`}
					>
						<p>
							{horse.name} run {horse.distance} meters
						</p>
					</div>
				);
			})}
		</>
	);
};

export default Horse;
