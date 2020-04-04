import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
	text: String,
	authorId: String,
	mood: String,
	like: [String],
	comment: [Object],
	report: [String],
});

const Posts = mongoose.model('Posts', PostSchema);

export default Posts;
