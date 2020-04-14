import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
	text: String,
	mood: String,
	authorId: String,
	comment: [Object],
	like: [String],
	report: [String],
});

const Posts = mongoose.model('Posts', PostSchema);

export default Posts;
