var express = require('express');
var router = express.Router();
const Todos = require('../models/Todos');

/* GET users listing. */
router.get('/', function(req, res, next) {
	Todos.find({}, (err, data) => {
		res.json({
			success: true,
			data: data,
		});
	});
});

router.post('/', (req, res, next) => {
	const { todo } = req.body;
	console.log(todo);
	Todos.create(
		{
			todo,
			isActive: false,
		},
		(err, data) => {
			res.json({
				data,
				success: true,
			});
		},
	);
});

router.delete('/', (req, res, next) => {
	const { id } = req.body;
	Todos.findByIdAndDelete(id, (err, data) => {
		res.json({
			data,
			success: true,
		});
	});
});

router.put('/', (req, res, next) => {
	const { title, isActive, id } = req.body.data;
	console.log(req.body);
	Todos.findByIdAndUpdate(
		id,
		{
			$set: {
				todo: title,
				isActive,
			},
		},
		(err, data) => {
			res.json({
				data,
				success: true,
			});
		},
	);
});

module.exports = router;
