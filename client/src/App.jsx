import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Horse from './components/Horse';
import Placement from './components/Placement';
import { connectSocket, socket } from './socket';
import { horseActions } from './store/horses';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		socket.on('ticker', (round) =>
			dispatch(horseActions.updateDistance(round))
		);
	}, [dispatch]);

	connectSocket();

	return (
		<div className='App'>
			<Horse />
			<Placement />
		</div>
	);
};

export default App;
