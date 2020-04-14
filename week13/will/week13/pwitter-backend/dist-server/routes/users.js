"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _users = _interopRequireDefault(require("../controllers/users"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express.default.Router();
/* GET users listing. */


router.get('/', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var data = yield _User.default.find();

    try {
      res.json({
        data,
        success: true
      });
    } catch (error) {
      res.json({
        data: error,
        success: false
      });
    }
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.get('/fetchById', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    var data = yield _User.default.findById(req.query.userId);

    try {
      res.json({
        data,
        success: true
      });
    } catch (error) {
      res.json({
        data: error,
        success: false
      });
    }
  });

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.get('/fetchFriendsByUser', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    var data = yield _users.default.fetchFriendsByUser(req.query);

    try {
      res.json({
        data,
        success: true
      });
    } catch (error) {
      res.json({
        data: error,
        success: false
      });
    }
  });

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
router.get('/fetchStrangersByUser', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    var data = yield _users.default.fetchStrangersByUser(req.query);

    try {
      res.json({
        data,
        success: true
      });
    } catch (error) {
      res.json({
        data: error,
        success: false
      });
    }
  });

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
router.post('/updateProfile', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    var data = yield _users.default.updateProfile(req.body);

    try {
      res.json({
        data,
        success: true
      });
    } catch (error) {
      res.json({
        data: error,
        success: false
      });
    }
  });

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
router.post('/friend/add', /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(function* (req, res) {
    var data = yield _users.default.addFriend(req.body);

    try {
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

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());
router.post('/friend/delete', /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(function* (req, res) {
    var data = yield _users.default.deleteFriend(req.body);

    try {
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

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());
var _default = router;
exports.default = _default;