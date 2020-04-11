import express from 'express';
import TodosController from '../controllers/todos';

const router = express.Router();

import Todos from '../models/Todos';

/* GET users listing. */

router.get('/fetch', async (req, res, next) => {
	const data = await TodosController.fetchUsers();
	res.json({ success: true, data });
});

//-------------- create new todo -------------------
router.post('/', async (req, res) => {
	const { todos } = req.body;
	const data = await TodosController.createNewTodo({ todos });
	res.json({
		success: true,
		data,
	});
});

//-------------- remove new todo -------------------

router.post('/remove', async (req, res) => {
	const { id, todos } = req.body;
	const data = await TodosController.removeTodo(id, todos);
	res.json({
		success: true,
		data,
	});
});

export default router;
