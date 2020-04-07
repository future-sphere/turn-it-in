import express from 'express';
import PostController from '../controllers/posts';

const router = express.Router();

/* GET users listing. */
router.get('/fetch', async (req, res, next) => {
	const posts = await PostController.fetchPosts();
	res.json({ success: true, posts });
});

router.get('/fetch/id', async (req, res) => {
	try {
		const data = await Posts.findById(req.query.postId);
		res.json({ success: true, data });
	} catch (error) {
		res.json({ success: false, data: error });
	}
});

router.get('/fetch/user', async (req, res) => {
	const posts = await PostController.fetchPostsByUser(req.query.authorId);
	res.json({ success: true, posts });
});

router.post('/', async (req, res) => {
	try {
		const post = await PostController.createPost(req.body);
		res.json({
			post,
			success: true,
		});
	} catch (error) {
		res.json({
			post: error,
			success: false,
		});
	}
});

router.post('/like', async (req, res) => {
	try {
		const { postId, authorId } = req.body;
		const post = await PostController.likePost({ postId, authorId });
		res.json({
			post,
			success: true,
		});
	} catch (error) {
		res.json({
			post: error,
			success: false,
		});
	}
});

router.post('/unlike', async (req, res) => {
	try {
		const { postId, authorId } = req.body;
		const post = await PostController.unlikePost({ postId, authorId });
		res.json({
			post,
			success: true,
		});
	} catch (error) {
		res.json({
			post: error,
			success: false,
		});
	}
});

router.post('/report', async (req, res) => {
	try {
		const { postId, authorId } = req.body;
		const post = await PostController.reportPost({ postId, authorId });
		res.json({
			post,
			success: true,
		});
	} catch (error) {
		res.json({
			post: error,
			success: false,
		});
	}
});

router.post('/unreport', async (req, res) => {
	try {
		const { postId, authorId } = req.body;
		const post = await PostController.unreportPost({ postId, authorId });
		res.json({
			post,
			success: true,
		});
	} catch (error) {
		res.json({
			post: error,
			success: false,
		});
	}
});

router.post('/comment', async (req, res) => {
	try {
		const { postId, authorId, text } = req.body;
		const comment = await PostController.createCommentInPost({
			postId,
			authorId,
			text,
		});
		res.json({
			comment,
			success: true,
		});
	} catch (error) {
		res.json({
			comment: error,
			success: false,
		});
	}
});

router.post('/comment/like', async (req, res) => {
	const { authorId, postId, commentIndex } = req.body;
	const like = PostController.likeComment({
		authorId,
		postId,
		commentIndex,
	});
	res.json({
		like,
		success: true,
	});
	try {
	} catch (error) {
		res.json({
			like: error,
			success: false,
		});
	}
});

router.post('/comment/unlike', async (req, res) => {
	const { authorId, postId, commentIndex } = req.body;
	const like = PostController.unlikeComment({
		authorId,
		postId,
		commentIndex,
	});
	res.json({
		like,
		success: true,
	});
	try {
	} catch (error) {
		res.json({
			like: error,
			success: false,
		});
	}
});

export default router;
