import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	age: Number,
	email: String,
	password: String,
	phoneNumber: Number,
	gender: String,
	friends: [String],
});

const Users = mongoose.model('Users', UserSchema);

export default Users;
