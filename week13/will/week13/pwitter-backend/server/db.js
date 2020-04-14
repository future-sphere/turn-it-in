import mongoose from 'mongoose';
require('dotenv').config();

const connectionString =
	'mongodb+srv://admin:will941102@cluster0-fmnlg.mongodb.net/pwitter';

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
