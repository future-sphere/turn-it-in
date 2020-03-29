"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Post = _interopRequireDefault(require("../models/Post"));

var _paginate = _interopRequireDefault(require("../helpers/paginate"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// //------------- insert new toto ------------------
// const createNewTodo = ({ id, input }) => {
// 	return Users.findByIdAndUpdate(
// 		id,
// 		{
// 			$push: {
// 				input: input,
// 			},
// 		},
// 		{ new: true },
// 	);
// };
// //----------------remove a todo -------------------
// const removeTodo = ({ id, input }) => {
// 	return Users.findByIdAndUpdate(
// 		id,
// 		{
// 			$pull: {
// 				input: input,
// 			},
// 		},
// 		{ new: true },
// 	);
// };
// const PostController = {
// 	removeTodo,
// 	createNewTodo,
// };
var _default = PostController;
exports.default = _default;