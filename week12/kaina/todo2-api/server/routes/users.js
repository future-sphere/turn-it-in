import express from 'express';
import UserController from '../controllers/users';

const router = express.Router();

import Users from '../models/User';

/* GET users listing. */

router.get('/fetch', async (req, res, next) => {
	const data = await UserController.fetchUsers();
	res.json({ success: true, data });
});

//------------- update title ---------------------
// router.put('/update/title', async (req, res) => {
// 	const { id, title } = req.body;
// 	const data = await UserController.updateTitle({ id, title });
// 	res.json({
// 		success: true,
// 		data,
// 	});
// });

//-------------- create new todo -------------------
router.post('/create/todo', async (req, res) => {
	const { todos } = req.body;
	const data = await UserController.createNewTodo({ todos });
	res.json({
		success: true,
		data,
	});
});

//-------------- remove new todo -------------------

router.post('/remove/todo', async (req, res) => {
	const { id, todos } = req.body;
	const data = await UserController.removeTodo(id, todos);
	res.json({
		success: true,
		data,
	});
});

export default router;
