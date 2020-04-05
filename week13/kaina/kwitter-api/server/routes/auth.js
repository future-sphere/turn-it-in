import express from 'express';
import AuthController from '../controllers/auth';
const router = express.Router();

router.post('/register', async (req, res) => {
	try {
		const result = await AuthController.register(req.body);
		res.json({
			success: true,
			data: result,
		});
	} catch (error) {
		res.json({
			success: false,
			data: error,
		});
	}
});

router.post('/login', async (req, res) => {
	try {
		const result = await AuthController.handleLogin(req.body);
		res.json({
			success: true,
			data: result,
		});
	} catch (error) {
		res.json({
			success: false,
			data: error,
		});
	}
});

export default router;
