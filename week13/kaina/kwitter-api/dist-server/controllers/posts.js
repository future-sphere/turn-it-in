"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Post = _interopRequireDefault(require("../models/Post"));

var _paginate = _interopRequireDefault(require("../helpers/paginate"));

var _User = _interopRequireDefault(require("../models/User"));

var _auth = _interopRequireDefault(require("../routes/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fetchPosts = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    var data = yield _Post.default.find();
    return _Post.default.find();
  });

  return function fetchPosts() {
    return _ref.apply(this, arguments);
  };
}();

var createPost = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (data) {
    var {
      text,
      comment,
      like,
      mood,
      report,
      authorId
    } = data;
    console.log(data);

    if (text && mood) {
      try {
        _Post.default.create(data);

        return data;
      } catch (error) {
        throw error;
      }
    } else throw 'Post or Mood is empty';
  });

  return function createPost(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var createComment = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (data) {
    var {
      postId,
      userId,
      commentText
    } = data;

    if (commentText) {
      try {
        yield _Post.default.findByIdAndUpdate(postId, {
          $push: {
            comment: {
              userId,
              commentText,
              like: []
            }
          }
        });
      } catch (error) {
        throw error;
      }
    } else throw 'Comment is empty';

    return data;
  });

  return function createComment(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var likePost = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (data) {
    var {
      postId,
      userId
    } = data;

    if (postId) {
      try {
        yield _Post.default.findByIdAndUpdate(postId, {
          $push: {
            like: userId
          }
        });
      } catch (error) {
        throw error;
      }
    }

    return data;
  });

  return function likePost(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

var unlikePost = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (data) {
    var {
      postId,
      userId
    } = data;

    try {
      yield _Post.default.findByIdAndUpdate(postId, {
        $pull: {
          like: userId
        }
      });
    } catch (error) {
      throw error;
    }
  });

  return function unlikePost(_x4) {
    return _ref5.apply(this, arguments);
  };
}();

var likeComment = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(function* (data) {
    var {
      postId,
      userId,
      index
    } = data;

    try {
      var {
        comment
      } = yield _Post.default.findById(postId);
      var newComment = [...comment];
      newComment[index].like.push(userId);
      var post = yield _Post.default.findByIdAndUpdate(postId, {
        $set: {
          comment: newComment
        }
      });
    } catch (error) {
      throw error;
    }
  });

  return function likeComment(_x5) {
    return _ref6.apply(this, arguments);
  };
}();

var unlikeComment = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(function* (data) {
    var {
      postId,
      userId,
      index
    } = data;

    try {
      var {
        comment
      } = yield _Post.default.findById(postId);
      var newComment = [...comment];
      newComment[index].like.splice(index, 1);
      var post = yield _Post.default.findByIdAndUpdate(postId, {
        $set: {
          comment: newComment
        }
      });
    } catch (error) {
      throw error;
    }
  });

  return function unlikeComment(_x6) {
    return _ref7.apply(this, arguments);
  };
}();

var reportPost = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(function* (data) {
    var {
      postId,
      userId
    } = data;

    if (postId) {
      try {
        yield _Post.default.findByIdAndUpdate(postId, {
          $push: {
            report: userId
          }
        });
      } catch (error) {
        throw error;
      }
    }

    return data;
  });

  return function reportPost(_x7) {
    return _ref8.apply(this, arguments);
  };
}();

var unreportPost = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(function* (data) {
    var {
      postId,
      userId
    } = data;

    try {
      yield _Post.default.findByIdAndUpdate(postId, {
        $pull: {
          report: userId
        }
      });
    } catch (error) {
      throw error;
    }
  });

  return function unreportPost(_x8) {
    return _ref9.apply(this, arguments);
  };
}();

var fetchPostByUser = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(function* (authorId) {
    var post = yield _Post.default.find({
      authorId: authorId
    });
    return post;
  });

  return function fetchPostByUser(_x9) {
    return _ref10.apply(this, arguments);
  };
}();

var PostController = {
  fetchPosts,
  createPost,
  createComment,
  likePost,
  unlikePost,
  likeComment,
  unlikeComment,
  reportPost,
  unreportPost,
  fetchPostByUser
};
var _default = PostController;
exports.default = _default;