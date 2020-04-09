import express from 'express';
import UserController from '../controllers/users';

const router = express.Router();

/* GET users listing. */
router.get('/fetch', async (req, res, next) => {
	const usersInfo = await UserController.fetchAllUsers();
	res.json({
		success: true,
		usersInfo,
	});
});

router.post('/friends', async (req, res) => {
	try {
		const { userId, friendId } = req.body;
		await UserController.addFriend({ userId, friendId });
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

router.delete('/friends', async (req, res) => {
	try {
		const { userId, friendId } = req.body;
		await UserController.deleteFriend({ userId, friendId });
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

router.get('/friends', async (req, res) => {
	try {
		const data = await UserController.findFriendByUserId(req.query);
		res.json({
			success: true,
			data,
		});
	} catch (error) {
		res.json({
			data: error,
			success: false,
		});
	}
});

router.get('/fetch/strangers', async (req, res) => {
	try {
		const data = await UserController.findStrangerByUserId(req.query);
		res.json({
			success: true,
			data,
		});
	} catch (error) {
		res.json({
			data: error,
			success: false,
		});
	}
});

router.get('/fetch/user', async (req, res) => {
	try {
		const user = await UserController.findUserById(req.query.userId);
		res.json({
			success: true,
			user,
		});
	} catch (error) {
		res.json({
			user: error,
			success: false,
		});
	}
});

router.post('/current', async (req, res) => {
	try {
		const user = await UserController.getCurrentUserByToken(req.body.token);
		res.json({
			user,
			success: true,
		});
	} catch (error) {
		res.json({
			user: error,
			success: false,
		});
	}
});

router.post('/profile', async (req, res) => {
	try {
		const { field, value, userId } = req.body;
		const result = await UserController.updateProfile({
			field,
			value,
			userId,
		});
		res.json(result);
	} catch (error) {
		res.json({
			result: error,
			success: false,
		});
	}
});

export default router;
