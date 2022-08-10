import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Button from './components/Button';
import Lineup from './components/Lineup';
import Placement from './components/Placement';
import { connectSocket, socket } from './socket';
import { horseActions } from './store/horses';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		socket.on('ticker', (round) => {
			dispatch(horseActions.updateDistance(round));
		});
	}, [dispatch]);

	connectSocket();

	return (
		<>
			<header className='header'>Horse Racing</header>
			<div className='scoreboard'>
				<Lineup />
				<Button />
				<Placement />
			</div>
		</>
	);
};

export default App;
