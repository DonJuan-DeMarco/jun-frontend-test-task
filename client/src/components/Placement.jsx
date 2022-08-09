import { useSelector } from 'react-redux';

const Placement = () => {
	const order = useSelector((state) => state.horses.finishOrder);

	return (
		<div>
			<p>Finish order:</p>

			{order.map((place) => (
				<p>{place}</p>
			))}
		</div>
	);
};

export default Placement;
