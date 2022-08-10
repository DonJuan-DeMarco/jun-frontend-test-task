import { useSelector } from 'react-redux';

const ProgressBar = (props) => {
	const { bgcolor, distance, name } = props;
	const order = useSelector((state) => state.horses.finishOrder);
	const progress = distance ? distance / 10 : 0;
	const color =
		distance !== 1000
			? `#${bgcolor}`
			: order.indexOf(name) === 0
			? 'gold'
			: order.indexOf(name) === 1
			? 'silver'
			: order.indexOf(name) === 2
			? '#e3af66'
			: '#f0ebd3';

	const fillerStyles = {
		width: `${progress}%`,
		backgroundColor: color,
	};

	const labelStyles = {
		color: color,
	};

	return (
		<div className='containerStyles'>
			<span
				className='labelStyles'
				style={labelStyles}
			>{`${name} run ${distance} meters`}</span>
			<div className='fillerStyles' style={fillerStyles}></div>
		</div>
	);
};

export default ProgressBar;
