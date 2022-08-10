import { useSelector } from 'react-redux';

const Placement = () => {
	const order = useSelector((state) => state.horses.finishOrder);

	return (
		<div className='podium'>
			<p className='finish'>Finish order:</p>

			{order.map((place, i) => (
				<div key={i} className={`place w${++i}`}>
					<p>{i}</p>
					<p>{place}</p>
				</div>
			))}
		</div>
	);
};

export default Placement;
