import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
	text: String,
	comment: [Object], // {Like}
	like: [String],
	mood: String,
	report: [String],
	authorId: String,
});

const Posts = mongoose.model('Posts', PostSchema);

export default Posts;
