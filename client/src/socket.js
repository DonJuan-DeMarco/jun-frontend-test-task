import io from 'socket.io-client';

let socket;

const startSocket = () => {
	socket.disconnect();
	socket.connect();
	socket.emit('start');
};

const connectSocket = () => {
	socket = io.connect('http://localhost:3002');
	socket.emit('start');

	socket.on('connect_error', (error) => {
		console.warn('connect_error', error);
	});
	socket.on('disconnect', (reason) => {
		console.warn('connect_error', reason);
	});
	socket.io.on('error', (error) => {
		console.warn('error', error);
	});
	socket.io.on('reconnect_error', (error) => {
		console.warn('reconnect_error', error);
	});
};

export { socket, connectSocket, startSocket };
