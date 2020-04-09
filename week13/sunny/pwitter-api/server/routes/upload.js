import express from 'express';
import multer from 'multer';

const router = express.Router();

var upload = multer({ dest: 'images/' });

//---upload---

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'images/');
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1000);
		cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg');
	},
});

var upload = multer({ storage: storage });

//--------------
// upload.single('avatar')中的avatar 要给前台的命名一样
router.post('/image', upload.single('avatar'), function (req, res, next) {
	console.log(req.file);
	//req.file, 跟命名无关
	res.json({
		data: `http://localhost:3010/images/${req.file.filename}`,
		success: true,
	});
});

export default router;
