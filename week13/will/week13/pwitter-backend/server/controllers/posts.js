import Posts from '../models/Post';
import paginate from '../helpers/paginate';
import Users from '../models/User';

const fetchInHome = async data => {
	const { userId, pageNumber } = data;
	const page = +pageNumber;
	const compare = (x, y) => {
		const a = x._id;
		const b = y._id;
		if (a > b) return -1;
		if (a < b) return 1;
		return 0;
	};
	try {
		const user = await Users.findById(userId);
		const fetchPost = await Posts.find({ authorId: { $in: user.friends } });
		const post = fetchPost.sort(compare);
		if (
			page <= parseInt(post.length / 10) &&
			page > 0 &&
			Math.floor(page) === page
		) {
			return post.slice((page - 1) * 10, page * 10);
		} else if (page == parseInt(post.length / 10) + 1) {
			return post.slice((page - 1) * 10);
		} else if (page > parseInt(post.length / 10)) {
			throw `The largest page number is ${parseInt(post.length / 10) + 1}`;
		} else {
			throw 'The page number you enter is wrong';
		}
	} catch (error) {
		throw error;
	}
};

const fetchByUser = async data => {
	const { authorId, pageNumber } = data;
	try {
		const page = +pageNumber;
		const post = await Posts.find({ authorId });
		if (
			page <= parseInt(post.length / 10) &&
			page > 0 &&
			Math.floor(page) === page
		) {
			return post.slice((page - 1) * 10, page * 10);
		} else if (page == parseInt(post.length / 10) + 1) {
			return post.slice((page - 1) * 10);
		} else if (page > parseInt(post.length / 10)) {
			throw `The largest page number is ${parseInt(post.length / 10) + 1}`;
		} else {
			throw 'The page number you enter is wrong';
		}
	} catch (error) {
		throw error;
	}
};

const sendPost = post => {
	const { text, authorId, mood, like, comment, report } = post;
	if (text) {
		try {
			Posts.create(post);
		} catch (error) {
			throw error;
		}
	} else throw 'Empty post can not be sent ';
};

const createComment = async data => {
	const { postId, userId, text } = data;
	if (text) {
		try {
			await Posts.findByIdAndUpdate(postId, {
				$push: {
					comment: { userId, text, like: [] },
				},
			});
		} catch (error) {
			throw error;
		}
	} else throw 'Empty comment can not be sent ';
};

const likePost = async data => {
	const { postId, userId } = data;
	const existed = await Posts.findById(postId);
	if (existed) {
		if (existed.like.includes(userId)) throw 'You have already liked this post';
		else {
			try {
				await Posts.findByIdAndUpdate(postId, {
					$push: { like: userId },
				});
			} catch (error) {
				throw error;
			}
		}
	} else throw 'Can not find post';
};

const unlikePost = async data => {
	const { postId, userId } = data;
	try {
		await Posts.findByIdAndUpdate(postId, { $pull: { like: userId } });
	} catch (error) {
		throw error;
	}
};

const reportPost = async data => {
	const { postId, userId } = data;
	const existed = await Posts.findById(postId);
	if (existed) {
		if (existed.report.includes(userId))
			throw 'You have already reported this post';
		else {
			try {
				await Posts.findByIdAndUpdate(postId, {
					$push: { report: userId },
				});
			} catch (error) {
				throw error;
			}
		}
	} else throw 'Can not find post';
};

const unreportPost = async data => {
	const { postId, userId } = data;
	try {
		await Posts.findByIdAndUpdate(postId, { $pull: { report: userId } });
	} catch (error) {
		throw error;
	}
};

const likeComment = async data => {
	const { postId, id, commentIndex } = data;
	try {
		const { comment } = await Posts.findById(postId);
		const newComment = [...comment];
		if (newComment[commentIndex].like.includes(id))
			throw 'You have already liked this comment ';
		else {
			newComment[commentIndex].like.push(id);
			const post = await Posts.findByIdAndUpdate(postId, {
				$set: { comment: newComment },
			});
		}
	} catch (error) {
		throw error;
	}
};

const unLikeComment = async data => {
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
	fetchInHome,
	fetchByUser,
	sendPost,
	createComment,
	likePost,
	unlikePost,
	reportPost,
	unreportPost,
	likeComment,
	unLikeComment,
};

export default PostController;
