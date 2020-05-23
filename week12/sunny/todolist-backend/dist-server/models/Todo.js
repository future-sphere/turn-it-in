"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Schema 就是你的规矩！
var TodoSchema = new _mongoose.default.Schema({
  //这里面写规矩：
  todo: String
});

var Todos = _mongoose.default.model('todos', TodoSchema); //结合了规矩+数据库里的todos(collection)


var _default = Todos;
exports.default = _default;