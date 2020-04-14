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

var fetchInHome = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (data) {
    var {
      userId,
      pageNumber
    } = data;
    var page = +pageNumber;

    var compare = (x, y) => {
      var a = x._id;
      var b = y._id;
      if (a > b) return -1;
      if (a < b) return 1;
      return 0;
    };

    try {
      var user = yield _User.default.findById(userId);
      var fetchPost = yield _Post.default.find({
        authorId: {
          $in: user.friends
        }
      });
      var post = fetchPost.sort(compare);

      if (page <= parseInt(post.length / 10) && page > 0 && Math.floor(page) === page) {
        return post.slice((page - 1) * 10, page * 10);
      } else if (page == parseInt(post.length / 10) + 1) {
        return post.slice((page - 1) * 10);
      } else if (page > parseInt(post.length / 10)) {
        throw "The largest page number is ".concat(parseInt(post.length / 10) + 1);
      } else {
        throw 'The page number you enter is wrong';
      }
    } catch (error) {
      throw error;
    }
  });

  return function fetchInHome(_x) {
    return _ref.apply(this, arguments);
  };
}();

var fetchByUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (data) {
    var {
      authorId,
      pageNumber
    } = data;

    try {
      var page = +pageNumber;
      var post = yield _Post.default.find({
        authorId
      });

      if (page <= parseInt(post.length / 10) && page > 0 && Math.floor(page) === page) {
        return post.slice((page - 1) * 10, page * 10);
      } else if (page == parseInt(post.length / 10) + 1) {
        return post.slice((page - 1) * 10);
      } else if (page > parseInt(post.length / 10)) {
        throw "The largest page number is ".concat(parseInt(post.length / 10) + 1);
      } else {
        throw 'The page number you enter is wrong';
      }
    } catch (error) {
      throw error;
    }
  });

  return function fetchByUser(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var sendPost = post => {
  var {
    text,
    authorId,
    mood,
    like,
    comment,
    report
  } = post;

  if (text) {
    try {
      _Post.default.create(post);
    } catch (error) {
      throw error;
    }
  } else throw 'Empty post can not be sent ';
};

var createComment = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (data) {
    var {
      postId,
      userId,
      text
    } = data;

    if (text) {
      try {
        yield _Post.default.findByIdAndUpdate(postId, {
          $push: {
            comment: {
              userId,
              text,
              like: []
            }
          }
        });
      } catch (error) {
        throw error;
      }
    } else throw 'Empty comment can not be sent ';
  });

  return function createComment(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var likePost = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (data) {
    var {
      postId,
      userId
    } = data;
    var existed = yield _Post.default.findById(postId);

    if (existed) {
      if (existed.like.includes(userId)) throw 'You have already liked this post';else {
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
    } else throw 'Can not find post';
  });

  return function likePost(_x4) {
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

  return function unlikePost(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

var reportPost = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(function* (data) {
    var {
      postId,
      userId
    } = data;
    var existed = yield _Post.default.findById(postId);

    if (existed) {
      if (existed.report.includes(userId)) throw 'You have already reported this post';else {
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
    } else throw 'Can not find post';
  });

  return function reportPost(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

var unreportPost = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(function* (data) {
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

  return function unreportPost(_x7) {
    return _ref7.apply(this, arguments);
  };
}();

var likeComment = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(function* (data) {
    var {
      postId,
      id,
      commentIndex
    } = data;

    try {
      var {
        comment
      } = yield _Post.default.findById(postId);
      var newComment = [...comment];
      if (newComment[commentIndex].like.includes(id)) throw 'You have already liked this comment ';else {
        newComment[commentIndex].like.push(id);
        var post = yield _Post.default.findByIdAndUpdate(postId, {
          $set: {
            comment: newComment
          }
        });
      }
    } catch (error) {
      throw error;
    }
  });

  return function likeComment(_x8) {
    return _ref8.apply(this, arguments);
  };
}();

var unLikeComment = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(function* (data) {
    var {
      postId,
      id,
      commentIndex
    } = data;

    try {
      var {
        comment
      } = yield _Post.default.findById(postId);
      var newComment = [...comment];
      var index = newComment[commentIndex].like.indexOf(id);
      newComment[commentIndex].like.splice(index, 1);
      var post = yield _Post.default.findByIdAndUpdate(postId, {
        $set: {
          comment: newComment
        }
      });
    } catch (error) {
      throw error;
    }
  });

  return function unLikeComment(_x9) {
    return _ref9.apply(this, arguments);
  };
}();

var PostController = {
  fetchInHome,
  fetchByUser,
  sendPost,
  createComment,
  likePost,
  unlikePost,
  reportPost,
  unreportPost,
  likeComment,
  unLikeComment
};
var _default = PostController;
exports.default = _default;