import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	phone: Number,
	gender: String,
	password: String,
	friends: [String],
});

const Users = mongoose.model('Users', UserSchema);

export default Users;
