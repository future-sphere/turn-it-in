import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	todos: String,
});

const Users = mongoose.model('Users', UserSchema);

export default Users;
