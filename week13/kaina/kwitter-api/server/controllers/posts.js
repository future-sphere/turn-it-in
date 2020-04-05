import Posts from '../models/Post';
import paginate from '../helpers/paginate';
import Users from '../models/User';
import router from '../routes/auth';

const fetchPosts = async () => {
	const data = await Posts.find();
	return Posts.find();
};

const createPost = async data => {
	const { text, comment, like, mood, report, authorId } = data;
	console.log(data);
	if (text && mood) {
		try {
			Posts.create(data);
			return data;
		} catch (error) {
			throw error;
		}
	} else throw 'Post or Mood is empty';
};

const createComment = async data => {
	const { postId, userId, commentText } = data;
	if (commentText) {
		try {
			await Posts.findByIdAndUpdate(postId, {
				$push: {
					comment: { userId, commentText, like: [] },
				},
			});
		} catch (error) {
			throw error;
		}
	} else throw 'Comment is empty';
	return data;
};

const likePost = async data => {
	const { postId, userId } = data;
	if (postId) {
		try {
			await Posts.findByIdAndUpdate(postId, {
				$push: {
					like: userId,
				},
			});
		} catch (error) {
			throw error;
		}
	}
	return data;
};

const unlikePost = async data => {
	const { postId, userId } = data;
	try {
		await Posts.findByIdAndUpdate(postId, {
			$pull: {
				like: userId,
			},
		});
	} catch (error) {
		throw error;
	}
};

const likeComment = async data => {
	const { postId, userId, index } = data;

	try {
		const { comment } = await Posts.findById(postId);
		const newComment = [...comment];

		newComment[index].like.push(userId);
		const post = await Posts.findByIdAndUpdate(postId, {
			$set: { comment: newComment },
		});
	} catch (error) {
		throw error;
	}
};

const unlikeComment = async data => {
	const { postId, userId, index } = data;

	try {
		const { comment } = await Posts.findById(postId);
		const newComment = [...comment];

		newComment[index].like.splice(index, 1);
		const post = await Posts.findByIdAndUpdate(postId, {
			$set: { comment: newComment },
		});
	} catch (error) {
		throw error;
	}
};

const reportPost = async data => {
	const { postId, userId } = data;
	if (postId) {
		try {
			await Posts.findByIdAndUpdate(postId, {
				$push: {
					report: userId,
				},
			});
		} catch (error) {
			throw error;
		}
	}
	return data;
};

const unreportPost = async data => {
	const { postId, userId } = data;
	try {
		await Posts.findByIdAndUpdate(postId, {
			$pull: {
				report: userId,
			},
		});
	} catch (error) {
		throw error;
	}
};

const fetchPostByUser = async authorId => {
	const post = await Posts.find({ authorId: authorId });
	return post;
};

const PostController = {
	fetchPosts,
	createPost,
	createComment,
	likePost,
	unlikePost,
	likeComment,
	unlikeComment,
	reportPost,
	unreportPost,
	fetchPostByUser,
};

export default PostController;
