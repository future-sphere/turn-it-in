import express from 'express';
import TodoController from '../controllers/todos';

import Todos from '../models/Todo';

const router = express.Router();

/* GET todos listing. */
router.get('/fetch', async (req, res, next) => {
	const data = await TodoController.fetchTodos();
	res.json({ success: true, data });
});

router.post('/create', async (req, res) => {
	console.log(req.body.input);
	const data = await TodoController.createTodo(req.body.input);
	// req.body 是既定的事实 在postman中所有post的data
	res.json({
		success: true,
		data,
	});
});

router.delete('/delete', async (req, res) => {
	console.log(req.body);
	const { id } = req.body;
	const data = await TodoController.deleteTodo(id);
	res.json({
		success: true,
		data,
	});
});

export default router;
