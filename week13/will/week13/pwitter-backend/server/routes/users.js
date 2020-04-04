import express from 'express';
import UserController from '../controllers/users';
import Users from '../models/User';

const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
	const data = await Users.find();
	try {
		res.json({
			data,
			success: true,
		});
	} catch (error) {
		res.json({
			data: error,
			success: false,
		});
	}
});

router.get('/fetchById', async (req, res) => {
	const data = await Users.findById(req.query.userId);
	try {
		res.json({
			data,
			success: true,
		});
	} catch (error) {
		res.json({
			data: error,
			success: false,
		});
	}
});

router.get('/fetchFriendsByUser', async (req, res) => {
	const data = await UserController.fetchFriendsByUser(req.query);
	try {
		res.json({
			data,
			success: true,
		});
	} catch (error) {
		res.json({
			data: error,
			success: false,
		});
	}
});

router.get('/fetchStrangersByUser', async (req, res) => {
	const data = await UserController.fetchStrangersByUser(req.query);
	try {
		res.json({
			data,
			success: true,
		});
	} catch (error) {
		res.json({
			data: error,
			success: false,
		});
	}
});

router.post('/updateProfile', async (req, res) => {
	const data = await UserController.updateProfile(req.body);
	try {
		res.json({
			data,
			success: true,
		});
	} catch (error) {
		res.json({
			data: error,
			success: false,
		});
	}
});

router.post('/friend/add', async (req, res) => {
	const data = await UserController.addFriend(req.body);
	try {
		res.json({
			success: true,
		});
	} catch (error) {
		res.json({
			data: error,
			success: false,
		});
	}
});

router.post('/friend/delete', async (req, res) => {
	const data = await UserController.deleteFriend(req.body);
	try {
		res.json({
			success: true,
		});
	} catch (error) {
		res.json({
			data: error,
			success: false,
		});
	}
});

export default router;
