"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodosSchema = new _mongoose.default.Schema({
  todos: String
});

var Todos = _mongoose.default.model('Todos', TodosSchema);

var _default = Todos;
exports.default = _default;