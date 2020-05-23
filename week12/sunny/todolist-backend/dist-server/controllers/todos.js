"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Todo = _interopRequireDefault(require("../models/Todo"));

var _paginate = _interopRequireDefault(require("../helpers/paginate"));

var _Post = _interopRequireDefault(require("../models/Post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fetchTodos = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    var data = yield _Todo.default.find();
    console.log(data);
    return data;
  });

  return function fetchTodos() {
    return _ref.apply(this, arguments);
  };
}();

var createTodo = input => {
  //input 是todo里面的数据
  return _Todo.default.create({
    todo: input
  });
};

var deleteTodo = id => {
  //只需要知道todo的id是什么 所以传进来一个id
  return _Todo.default.findByIdAndRemove(id);
};

var TodoController = {
  fetchTodos,
  createTodo,
  deleteTodo
};
var _default = TodoController;
exports.default = _default;