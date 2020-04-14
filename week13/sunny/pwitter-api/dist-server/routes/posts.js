"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _posts = _interopRequireDefault(require("../controllers/posts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express.default.Router();
/* GET users listing. */


router.get('/fetch', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    var posts = yield _posts.default.fetchPosts();
    res.json({
      success: true,
      posts
    });
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
router.get('/fetch/id', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    try {
      var data = yield Posts.findById(req.query.postId);
      res.json({
        success: true,
        data
      });
    } catch (error) {
      res.json({
        success: false,
        data: error
      });
    }
  });

  return function (_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}());
router.get('/fetch/user', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    var posts = yield _posts.default.fetchPostsByUser(req.query.authorId);
    res.json({
      success: true,
      posts
    });
  });

  return function (_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}());
router.post('/', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    try {
      var post = yield _posts.default.createPost(req.body);
      res.json({
        post,
        success: true
      });
    } catch (error) {
      res.json({
        post: error,
        success: false
      });
    }
  });

  return function (_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}());
router.post('/like', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    try {
      var {
        postId,
        authorId
      } = req.body;
      var post = yield _posts.default.likePost({
        postId,
        authorId
      });
      res.json({
        post,
        success: true
      });
    } catch (error) {
      res.json({
        post: error,
        success: false
      });
    }
  });

  return function (_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}());
router.post('/unlike', /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(function* (req, res) {
    try {
      var {
        postId,
        authorId
      } = req.body;
      var post = yield _posts.default.unlikePost({
        postId,
        authorId
      });
      res.json({
        post,
        success: true
      });
    } catch (error) {
      res.json({
        post: error,
        success: false
      });
    }
  });

  return function (_x12, _x13) {
    return _ref6.apply(this, arguments);
  };
}());
router.post('/report', /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(function* (req, res) {
    try {
      var {
        postId,
        authorId
      } = req.body;
      var post = yield _posts.default.reportPost({
        postId,
        authorId
      });
      res.json({
        post,
        success: true
      });
    } catch (error) {
      res.json({
        post: error,
        success: false
      });
    }
  });

  return function (_x14, _x15) {
    return _ref7.apply(this, arguments);
  };
}());
router.post('/unreport', /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(function* (req, res) {
    try {
      var {
        postId,
        authorId
      } = req.body;
      var post = yield _posts.default.unreportPost({
        postId,
        authorId
      });
      res.json({
        post,
        success: true
      });
    } catch (error) {
      res.json({
        post: error,
        success: false
      });
    }
  });

  return function (_x16, _x17) {
    return _ref8.apply(this, arguments);
  };
}());
router.post('/comment', /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(function* (req, res) {
    try {
      var {
        postId,
        authorId,
        text
      } = req.body;
      var comment = yield _posts.default.createCommentInPost({
        postId,
        authorId,
        text
      });
      res.json({
        comment,
        success: true
      });
    } catch (error) {
      res.json({
        comment: error,
        success: false
      });
    }
  });

  return function (_x18, _x19) {
    return _ref9.apply(this, arguments);
  };
}());
router.post('/comment/like', /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(function* (req, res) {
    var {
      authorId,
      postId,
      commentIndex
    } = req.body;

    var like = _posts.default.likeComment({
      authorId,
      postId,
      commentIndex
    });

    res.json({
      like,
      success: true
    });

    try {} catch (error) {
      res.json({
        like: error,
        success: false
      });
    }
  });

  return function (_x20, _x21) {
    return _ref10.apply(this, arguments);
  };
}());
router.post('/comment/unlike', /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(function* (req, res) {
    var {
      authorId,
      postId,
      commentIndex
    } = req.body;

    var like = _posts.default.unlikeComment({
      authorId,
      postId,
      commentIndex
    });

    res.json({
      like,
      success: true
    });

    try {} catch (error) {
      res.json({
        like: error,
        success: false
      });
    }
  });

  return function (_x22, _x23) {
    return _ref11.apply(this, arguments);
  };
}());
var _default = router;
exports.default = _default;