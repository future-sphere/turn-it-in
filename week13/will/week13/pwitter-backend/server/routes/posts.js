import express from 'express';
import PostController from '../controllers/posts';
import Posts from '../models/Post';

const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
	try {
		const data = await Posts.find();
		res.json({ success: true, data });
	} catch (error) {
		res.json({ success: false, data: error });
	}
});

router.get('/fetchById', async (req, res) => {
	try {
		const data = await Posts.findById(req.query.postId);
		res.json({ success: true, data });
	} catch (error) {
		res.json({ success: false, data: error });
	}
});

router.get('/fetchByUser', async (req, res) => {
	try {
		const data = await PostController.fetchByUser(req.query);
		res.json({ success: true, data });
	} catch (error) {
		res.json({ success: false, data: error });
	}
});

router.get('/fetchInHome', async (req, res) => {
	try {
		const data = await PostController.fetchInHome(req.query);
		res.json({ success: true, data });
	} catch (error) {
		res.json({ success: false, data: error });
	}
});

router.post('/send', async (req, res) => {
	try {
		const data = await PostController.sendPost(req.body);
		res.json({ success: true, data });
	} catch (error) {
		res.json({ success: false, data: error });
	}
});

router.post('/comment', async (req, res) => {
	try {
		const data = await PostController.createComment(req.body);
		res.json({ success: true, data });
	} catch (error) {
		res.json({ success: false, data: error });
	}
});

router.post('/like', async (req, res) => {
	try {
		const data = await PostController.likePost(req.body);
		res.json({ success: true, data });
	} catch (error) {
		res.json({ success: false, data: error });
	}
});

router.post('/unlike', async (req, res) => {
	try {
		const data = await PostController.unlikePost(req.body);
		res.json({ success: true, data });
	} catch (error) {
		res.json({ success: false, data: error });
	}
});

router.post('/report', async (req, res) => {
	try {
		const data = await PostController.reportPost(req.body);
		res.json({ success: true, data });
	} catch (error) {
		res.json({ success: false, data: error });
	}
});

router.post('/unreport', async (req, res) => {
	try {
		const data = await PostController.unreportPost(req.body);
		res.json({ success: true, data });
	} catch (error) {
		res.json({ success: false, data: error });
	}
});

router.post('/likeComment', async (req, res) => {
	try {
		const data = await PostController.likeComment(req.body);
		res.json({ success: true, data });
	} catch (error) {
		res.json({ success: false, data: error });
	}
});

router.post('/unLikeComment', async (req, res) => {
	try {
		const data = await PostController.unLikeComment(req.body);
		res.json({ success: true, data });
	} catch (error) {
		res.json({ success: false, data: error });
	}
});

export default router;
