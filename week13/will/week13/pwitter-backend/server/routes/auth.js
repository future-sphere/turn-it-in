import express from 'express';
import AuthController from '../controllers/auth';
const router = express.Router();

router.post('/register', async (req, res) => {
	try {
		const data = await AuthController.register(req.body);
		res.json({ success: true, data });
	} catch (error) {
		res.json({ success: false, data: error });
	}
});

router.post('/login', async (req, res) => {
	try {
		const data = await AuthController.handleLogin(req.body);
		res.json({ success: true, data });
	} catch (error) {
		res.json({ success: false, data: error });
	}
});

router.post('/verifyToken', async (req, res) => {
	try {
		const data = await AuthController.verifyToken(req.body.token);
		res.json({ success: true, data });
	} catch (error) {
		res.json({ success: false, data: error });
	}
});

export default router;
