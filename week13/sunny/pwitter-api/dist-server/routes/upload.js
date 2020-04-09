"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _multer = _interopRequireDefault(require("multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

var upload = (0, _multer.default)({
  dest: 'images/'
}); //---upload---

var storage = _multer.default.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'images/');
  },
  filename: function filename(req, file, cb) {
    var uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1000);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg');
  }
});

var upload = (0, _multer.default)({
  storage: storage
}); //--------------
// upload.single('avatar')中的avatar 要给前台的命名一样

router.post('/image', upload.single('avatar'), function (req, res, next) {
  console.log(req.file); //req.file, 跟命名无关

  res.json({
    data: "http://localhost:3010/images/".concat(req.file.filename),
    success: true
  });
});
var _default = router;
exports.default = _default;