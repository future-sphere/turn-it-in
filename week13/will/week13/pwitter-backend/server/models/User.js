import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	email: String,
	password: String,
	phone: Number,
	firstName: String,
	lastName: String,
	age: Number,
	gender: String,
	street: String,
	city: String,
	state: String,
	zip: Number,
	avatar: String,
	friends: [String],
});

const Users = mongoose.model('Users', UserSchema);

export default Users;
