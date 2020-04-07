"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _users = _interopRequireDefault(require("../controllers/users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express.default.Router();
/* GET users listing. */


router.get('/fetch', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    var usersInfo = yield _users.default.fetchAllUsers();
    res.json({
      success: true,
      usersInfo
    });
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
router.post('/friends', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    try {
      var {
        userId,
        friendId
      } = req.body;
      yield _users.default.addFriend({
        userId,
        friendId
      });
      res.json({
        success: true
      });
    } catch (error) {
      res.json({
        data: error,
        success: false
      });
    }
  });

  return function (_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}());
router.delete('/friends', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    try {
      var {
        userId,
        friendId
      } = req.body;
      yield _users.default.deleteFriend({
        userId,
        friendId
      });
      res.json({
        success: true
      });
    } catch (error) {
      res.json({
        data: error,
        success: false
      });
    }
  });

  return function (_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}());
router.get('/friends', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    try {
      var usersInfo = yield _users.default.findFriendByUserId(req.query);
      res.json({
        success: true,
        usersInfo
      });
    } catch (error) {
      res.json({
        data: error,
        success: false
      });
    }
  });

  return function (_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}());
router.get('/fetch/strangers', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    try {
      var usersInfo = yield _users.default.findStrangerByUserId(req.query);
      res.json({
        success: true,
        usersInfo
      });
    } catch (error) {
      res.json({
        data: error,
        success: false
      });
    }
  });

  return function (_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}());
router.get('/fetch/user', /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(function* (req, res) {
    try {
      var user = yield _users.default.findUserById(req.query.userId);
      res.json({
        success: true,
        user
      });
    } catch (error) {
      res.json({
        user: error,
        success: false
      });
    }
  });

  return function (_x12, _x13) {
    return _ref6.apply(this, arguments);
  };
}());
router.post('/current', /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(function* (req, res) {
    try {
      var user = yield _users.default.getCurrentUserByToken(req.body.token);
      res.json({
        user,
        success: true
      });
    } catch (error) {
      res.json({
        user: error,
        success: false
      });
    }
  });

  return function (_x14, _x15) {
    return _ref7.apply(this, arguments);
  };
}());
router.post('/profile', /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(function* (req, res) {
    try {
      var {
        field,
        value,
        userId
      } = req.body;
      var result = yield _users.default.updateProfile({
        field,
        value,
        userId
      });
      res.json(result);
    } catch (error) {
      res.json({
        result: error,
        success: false
      });
    }
  });

  return function (_x16, _x17) {
    return _ref8.apply(this, arguments);
  };
}());
var _default = router;
exports.default = _default;