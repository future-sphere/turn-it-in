import express from 'express';
import PostController from '../controllers/posts';
import Posts from '../models/Post';

const router = express.Router();

/* GET users listing. */
router.get('/fetch', async (req, res, next) => {
	const data = await PostController.fetchPosts();
	res.json({ success: true, data });
});

router.post('/', async (req, res) => {
	try {
		const data = await PostController.createPost(req.body);
		res.json({
			success: true,
			data,
		});
	} catch (error) {
		res.json({
			success: false,
			data: error,
		});
	}
});

router.post('/comment', async (req, res) => {
	try {
		const data = await PostController.createComment(req.body);
		console.log(data);
		res.json({
			success: true,
			data,
		});
	} catch (error) {
		res.json({
			success: false,
			data: error,
		});
	}
});

router.post('/like', async (req, res) => {
	try {
		const data = await PostController.likePost(req.body);
		res.json({
			success: true,
			data,
		});
	} catch (error) {
		res.json({
			success: false,
			data: error,
		});
	}
});

router.post('/unlike', async (req, res) => {
	try {
		const data = await PostController.unlikePost(req.body);
		res.json({
			success: true,
			data,
		});
	} catch (error) {
		res.json({
			success: false,
			data: error,
		});
	}
});

router.post('/comment/like', async (req, res) => {
	try {
		const data = await PostController.likeComment(req.body);
		res.json({
			success: true,
			data,
		});
	} catch (error) {
		res.json({
			success: false,
			data: error,
		});
	}
});

router.post('/comment/unlike', async (req, res) => {
	try {
		const data = await PostController.unlikeComment(req.body);
		res.json({
			success: true,
			data,
		});
	} catch (error) {
		res.json({
			success: false,
			data: error,
		});
	}
});

router.post('/report', async (req, res) => {
	try {
		const data = await PostController.reportPost(req.body);
		res.json({
			success: true,
			data,
		});
	} catch (error) {
		res.json({
			success: false,
			data: error,
		});
	}
});

router.post('/unreport', async (req, res) => {
	try {
		const data = await PostController.unreportPost(req.body);
		res.json({
			success: true,
			data,
		});
	} catch (error) {
		res.json({
			success: false,
			data: error,
		});
	}
});

//---------------- Find post by postId -----------------

router.get('/fetchById', async (req, res, next) => {
	try {
		const data = await Posts.findById(req.query.postId);
		res.json({ success: true, data });
	} catch (error) {
		res.json({
			success: false,
			data: error,
		});
	}
});

//---------------- Find post by userId -----------------

router.get('/fetchByUser', async (req, res) => {
	try {
		const data = await PostController.fetchPostByUser(req.query.authorId);
		res.json({ success: true, data });
	} catch (error) {
		res.json({
			success: false,
			data: error,
		});
	}
});

export default router;
