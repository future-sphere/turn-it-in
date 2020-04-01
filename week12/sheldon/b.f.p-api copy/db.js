const mongoose = require('mongoose');

let isConnected = false;
const connectionString =
	'mongodb+srv://admin:freebeach@cluster0-7phj9.mongodb.net/todolist';

const connectToDataBase = () => {
	if (isConnected) {
		console.log('connection established using existing connection');
		return Promise.resolve();
	}
	console.log('using new database connection');

	return mongoose
		.connect(connectionString, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(db => {
			isConnected = db.connections[0].readyState;
			console.log('connection success');
		})
		.catch(e => console.log(e));
};

module.exports = connectToDataBase;
