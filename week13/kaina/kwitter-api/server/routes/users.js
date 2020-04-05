import express from 'express';
import UserController from '../controllers/users';
import Users from '../models/User';

const router = express.Router();

/* GET users listing. */
router.get('/fetch', async (req, res, next) => {
	const data = await UserController.fetchUsers();
	res.json({ success: true, data });
});

router.get('/fetchById', async (req, res) => {
	const data = await Users.findById(req.query.userId);
	try {
		res.json({ success: true, data });
	} catch (error) {
		res.json({
			success: false,
			data: error,
		});
	}
});

router.post('/', async (req, res) => {
	try {
		const data = await UserController.createUser(req.body);
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

router.post('/friend', async (req, res) => {
	try {
		const { userId, friendId } = req.body;
		await UserController.createFriendship(req.body);
		res.json({
			success: true,
		});
	} catch (error) {
		res.json({
			success: false,
			data: error,
		});
	}
});

router.delete('/friend', async (req, res) => {
	try {
		const { userId, friendId } = req.body;
		await UserController.removeFriendship({ userId, friendId });
		res.json({
			success: true,
		});
	} catch (error) {
		res.json({
			success: false,
			data: error,
		});
	}
});

router.get('/friend/fetchById', async (req, res) => {
	try {
		const data = await UserController.fetchFriendById(req.query);
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

router.get('/stranger/fetchById', async (req, res) => {
	try {
		const data = await UserController.fetchStrangerById(req.query);
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

router.post('/profile/update', async (req, res) => {
	try {
		const data = await UserController.updateProfile(req.body);
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

export default router;
