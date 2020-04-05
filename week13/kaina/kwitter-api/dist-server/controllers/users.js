"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _paginate = _interopRequireDefault(require("../helpers/paginate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fetchUsers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    var data = yield _User.default.find();
    return _User.default.find();
  });

  return function fetchUsers() {
    return _ref.apply(this, arguments);
  };
}();

var createUser = data => {
  return _User.default.create(data);
};

var createFriendship = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (data) {
    var {
      userId,
      friendId
    } = data;

    try {
      if (userId === friendId) throw 'You cannot add yourself as friend';

      if (userId && friendId) {
        var user = yield _User.default.findById(userId);

        if (user.friends.includes(friendId)) {
          throw 'You have already added this user as friend';
        }

        yield _User.default.findByIdAndUpdate(userId, {
          $push: {
            friends: friendId
          }
        });
        yield _User.default.findByIdAndUpdate(friendId, {
          $push: {
            friends: userId
          }
        });
      } else {
        throw 'Missing user id or friend id';
      }
    } catch (error) {
      throw error;
    }
  });

  return function createFriendship(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var removeFriendship = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (_ref4) {
    var {
      userId,
      friendId
    } = _ref4;
    if (userId === friendId) throw 'You cannot add yourself as friend';

    if (userId && friendId) {
      try {
        var user = yield _User.default.findById(userId);

        if (user.friends.includes(friendId)) {
          yield _User.default.findByIdAndUpdate(userId, {
            $pull: {
              friends: friendId
            }
          });
          yield _User.default.findByIdAndUpdate(friendId, {
            $pull: {
              friends: userId
            }
          });
        } else {
          throw 'You are not friend with this user';
        }
      } catch (error) {
        throw error;
      }
    }
  });

  return function removeFriendship(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var updateProfile = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (data) {
    var {
      field,
      value,
      userId
    } = data;

    try {
      if (userId && field && value) {
        return yield _User.default.findByIdAndUpdate(userId, {
          $set: {
            [field]: value
          }
        }, {
          new: true
        });
      } else throw 'Missing something';
    } catch (error) {
      throw error;
    }
  });

  return function updateProfile(_x3) {
    return _ref5.apply(this, arguments);
  };
}();

var fetchFriendById = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(function* (_ref7) {
    var {
      userId
    } = _ref7;

    try {
      if (userId) {
        var currentUser = yield _User.default.findById(userId);
        return yield _User.default.find({
          _id: {
            $in: currentUser.friends
          }
        });
      } else {
        throw 'Missing users';
      }
    } catch (error) {
      throw error;
    }
  });

  return function fetchFriendById(_x4) {
    return _ref6.apply(this, arguments);
  };
}();

var fetchStrangerById = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(function* (_ref9) {
    var {
      userId
    } = _ref9;

    try {
      if (userId) {
        var currentUser = yield _User.default.findById(userId);
        return yield _User.default.find({
          _id: {
            $nin: currentUser.friends
          }
        });
      } else {
        throw ' Missing users';
      }
    } catch (error) {
      throw error;
    }
  });

  return function fetchStrangerById(_x5) {
    return _ref8.apply(this, arguments);
  };
}();

var UserController = {
  fetchUsers,
  createUser,
  createFriendship,
  removeFriendship,
  updateProfile,
  fetchFriendById,
  fetchStrangerById
};
var _default = UserController;
exports.default = _default;