"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Post = _interopRequireDefault(require("../models/Post"));

var _paginate = _interopRequireDefault(require("../helpers/paginate"));

var _Todo = _interopRequireDefault(require("../models/Todo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchPosts = () => {
  return _Post.default.find();
};

var PostController = {
  fetchPosts
};
var _default = PostController;
exports.default = _default;