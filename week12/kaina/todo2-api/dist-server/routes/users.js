"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _users = _interopRequireDefault(require("../controllers/users"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express.default.Router();

/* GET users listing. */
router.get('/fetch', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    var data = yield _users.default.fetchUsers();
    res.json({
      success: true,
      data
    });
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}()); //------------- update title ---------------------
// router.put('/update/title', async (req, res) => {
// 	const { id, title } = req.body;
// 	const data = await UserController.updateTitle({ id, title });
// 	res.json({
// 		success: true,
// 		data,
// 	});
// });
//-------------- create new todo -------------------

router.post('/create/todo', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    var {
      todos
    } = req.body;
    var data = yield _users.default.createNewTodo({
      todos
    });
    res.json({
      success: true,
      data
    });
  });

  return function (_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}()); //-------------- remove new todo -------------------

router.post('/remove/todo', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    var {
      id,
      todos
    } = req.body;
    var data = yield _users.default.removeTodo(id, todos);
    res.json({
      success: true,
      data
    });
  });

  return function (_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}());
var _default = router;
exports.default = _default;