"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Post = _interopRequireDefault(require("../models/Post"));

var _paginate = _interopRequireDefault(require("../helpers/paginate"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fetchPosts = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    var posts = yield _Post.default.find();
    return posts;
  });

  return function fetchPosts() {
    return _ref.apply(this, arguments);
  };
}();

var fetchPostsByUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (authorId) {
    var posts = yield _Post.default.find({
      authorId: authorId
    });
    return posts;
  });

  return function fetchPostsByUser(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var createPost = post => {
  var {
    text,
    mood,
    authorId,
    comment,
    like,
    report
  } = post;

  if (text && mood) {
    try {
      return _Post.default.create(post);
    } catch (error) {
      throw error;
    }
  } else throw 'Text and Mood cannot be empty';
};

var likePost = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (_ref4) {
    var {
      postId,
      authorId
    } = _ref4;
    var currPost = yield _Post.default.findById(postId);
    if (currPost.like.includes(authorId)) throw 'You have liked this post already';else {
      try {
        return yield _Post.default.findByIdAndUpdate(postId, {
          $push: {
            like: authorId
          }
        });
      } catch (error) {
        throw error;
      }
    }
  });

  return function likePost(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var unlikePost = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (_ref6) {
    var {
      postId,
      authorId
    } = _ref6;

    try {
      return yield _Post.default.findByIdAndUpdate(postId, {
        $pull: {
          like: authorId
        }
      });
    } catch (error) {
      throw error;
    }
  });

  return function unlikePost(_x3) {
    return _ref5.apply(this, arguments);
  };
}();

var reportPost = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(function* (_ref8) {
    var {
      postId,
      authorId
    } = _ref8;
    var currPost = yield _Post.default.findById(postId);
    if (currPost.report.includes(authorId)) throw 'You have reported this post already';else {
      try {
        return yield _Post.default.findByIdAndUpdate(postId, {
          $push: {
            report: authorId
          }
        });
      } catch (error) {
        throw error;
      }
    }
  });

  return function reportPost(_x4) {
    return _ref7.apply(this, arguments);
  };
}();

var unreportPost = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(function* (_ref10) {
    var {
      postId,
      authorId
    } = _ref10;

    try {
      return yield _Post.default.findByIdAndUpdate(postId, {
        $pull: {
          report: authorId
        }
      });
    } catch (error) {
      throw error;
    }
  });

  return function unreportPost(_x5) {
    return _ref9.apply(this, arguments);
  };
}();

var createCommentInPost = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(function* (_ref12) {
    var {
      postId,
      authorId,
      text
    } = _ref12;

    if (text) {
      try {
        return yield _Post.default.findByIdAndUpdate(postId, {
          $push: {
            comment: {
              authorId,
              text,
              like: []
            }
          }
        });
      } catch (error) {
        throw error;
      }
    } else {
      throw 'Comment cannot be empty';
    }
  });

  return function createCommentInPost(_x6) {
    return _ref11.apply(this, arguments);
  };
}();

var likeComment = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(function* (_ref14) {
    var {
      authorId,
      postId,
      commentIndex
    } = _ref14;

    try {
      var {
        comment
      } = yield _Post.default.findById(postId);
      var nextComment = [...comment];
      newComment[commentIndex].like.push(id);
      var post = yield _Post.default.findByIdAndUpdate(postId, {
        $set: {
          comment: newComment
        }
      });
    } catch (error) {
      throw error;
    }
  });

  return function likeComment(_x7) {
    return _ref13.apply(this, arguments);
  };
}();

var unLikeComment = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator(function* (data) {
    var {
      postId,
      id,
      commentIndex
    } = data;

    try {
      var {
        comment
      } = yield _Post.default.findById(postId);
      var _newComment = [...comment];

      var index = _newComment[commentIndex].like.indexOf(id);

      _newComment[commentIndex].like.splice(index, 1);

      var post = yield _Post.default.findByIdAndUpdate(postId, {
        $set: {
          comment: _newComment
        }
      });
    } catch (error) {
      throw error;
    }
  });

  return function unLikeComment(_x8) {
    return _ref15.apply(this, arguments);
  };
}();

var PostController = {
  fetchPosts,
  fetchPostsByUser,
  createPost,
  likePost,
  unlikePost,
  reportPost,
  unreportPost,
  createCommentInPost,
  likeComment,
  unLikeComment
};
var _default = PostController;
exports.default = _default;