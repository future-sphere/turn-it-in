import Posts from '../models/Post';
import paginate from '../helpers/paginate';
import Users from '../models/User';

const fetchPosts = async () => {
	const posts = await Posts.find();
	return posts;
};

const fetchPostsByUser = async (authorId) => {
	const posts = await Posts.find({ authorId: authorId });
	return posts;
};

const createPost = (post) => {
	const { text, mood, authorId, comment, like, report } = post;
	if (text && mood) {
		try {
			return Posts.create(post);
		} catch (error) {
			throw error;
		}
	} else throw 'Text and Mood cannot be empty';
};

const likePost = async ({ postId, authorId }) => {
	const currPost = await Posts.findById(postId);
	if (currPost.like.includes(authorId))
		throw 'You have liked this post already';
	else {
		try {
			return await Posts.findByIdAndUpdate(postId, {
				$push: { like: authorId },
			});
		} catch (error) {
			throw error;
		}
	}
};

const unlikePost = async ({ postId, authorId }) => {
	try {
		return await Posts.findByIdAndUpdate(postId, {
			$pull: { like: authorId },
		});
	} catch (error) {
		throw error;
	}
};

const reportPost = async ({ postId, authorId }) => {
	const currPost = await Posts.findById(postId);
	if (currPost.report.includes(authorId))
		throw 'You have reported this post already';
	else {
		try {
			return await Posts.findByIdAndUpdate(postId, {
				$push: { report: authorId },
			});
		} catch (error) {
			throw error;
		}
	}
};

const unreportPost = async ({ postId, authorId }) => {
	try {
		return await Posts.findByIdAndUpdate(postId, {
			$pull: { report: authorId },
		});
	} catch (error) {
		throw error;
	}
};

const createCommentInPost = async ({ postId, authorId, text }) => {
	if (text) {
		try {
			return await Posts.findByIdAndUpdate(postId, {
				$push: {
					comment: { authorId, text, like: [] },
				},
			});
		} catch (error) {
			throw error;
		}
	} else {
		throw 'Comment cannot be empty';
	}
};

const likeComment = async ({ authorId, postId, commentIndex }) => {
	try {
		const { comment } = await Posts.findById(postId);
		const nextComment = [...comment];

		newComment[commentIndex].like.push(id);
		const post = await Posts.findByIdAndUpdate(postId, {
			$set: { comment: newComment },
		});
	} catch (error) {
		throw error;
	}
};

const unLikeComment = async (data) => {
	const { postId, id, commentIndex } = data;
	try {
		const { comment } = await Posts.findById(postId);
		const newComment = [...comment];
		const index = newComment[commentIndex].like.indexOf(id);
		newComment[commentIndex].like.splice(index, 1);
		const post = await Posts.findByIdAndUpdate(postId, {
			$set: { comment: newComment },
		});
	} catch (error) {
		throw error;
	}
};

const PostController = {
	fetchPosts,
	fetchPostsByUser,
	createPost,
	likePost,
	unlikePost,
	reportPost,
	unreportPost,
	createCommentInPost,
	likeComment,
	unLikeComment,
};

export default PostController;
