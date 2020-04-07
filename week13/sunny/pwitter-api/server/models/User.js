import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	age: Number,
	gender: String,
	email: String,
	phone: Number,
	password: String,
	street: String,
	city: String,
	state: String,
	zip: Number,
	friends: [String],
});

const Users = mongoose.model('Users', UserSchema);

export default Users;
