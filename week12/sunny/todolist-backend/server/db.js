import mongoose from 'mongoose'; // ORM: database management
require('dotenv').config();

const connectionString =
	'mongodb+srv://admin:p@ssword@cluster0-20tn6.mongodb.net/todolist-backend';

let isConnected;

const connectToDatabase = () => {
	if (isConnected) {
		console.log('=> using existing database connection');
		return Promise.resolve();
	}
	console.log('=> using new database connection');
	return mongoose
		.connect(connectionString, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(db => {
			isConnected = db.connections[0].readyState;
			console.log('Connection Success!');
		})
		.catch(e => {
			console.log(e);
		});
};

export default connectToDatabase;
