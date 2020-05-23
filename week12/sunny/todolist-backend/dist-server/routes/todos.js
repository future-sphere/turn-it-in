"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _todos = _interopRequireDefault(require("../controllers/todos"));

var _Todo = _interopRequireDefault(require("../models/Todo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express.default.Router();
/* GET todos listing. */


router.get('/fetch', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    var data = yield _todos.default.fetchTodos();
    res.json({
      success: true,
      data
    });
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
router.post('/create', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    console.log(req.body.input);
    var data = yield _todos.default.createTodo(req.body.input); // req.body 是既定的事实 在postman中所有post的data

    res.json({
      success: true,
      data
    });
  });

  return function (_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}());
router.delete('/delete', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    console.log(req.body);
    var {
      id
    } = req.body;
    var data = yield _todos.default.deleteTodo(id);
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