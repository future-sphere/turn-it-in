"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _paginate = _interopRequireDefault(require("../helpers/paginate"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require('dotenv').config();

var jwtSecret = process.env.JWT_SECRET;

var fetchAllUsers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    var usersInfo = yield _User.default.find();
    console.log(usersInfo);
    return usersInfo;
  });

  return function fetchAllUsers() {
    return _ref.apply(this, arguments);
  };
}();

var addFriend = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (_ref3) {
    var {
      userId,
      friendId
    } = _ref3;

    try {
      if (userId === friendId) throw 'You cannot add yourself as friend';

      if (userId && friendId) {
        var user = yield _User.default.findById(userId);
        var friend = yield _User.default.findById(friendId);

        if (user.friends.includes(friendId)) {
          throw 'You are already friends with this user';
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
      }
    } catch (error) {
      throw error;
    }
  });

  return function addFriend(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var deleteFriend = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (_ref5) {
    var {
      userId,
      friendId
    } = _ref5;

    try {
      if (userId === friendId) throw 'You cannot delete yourself';

      if (userId && friendId) {
        var user = yield _User.default.findById(userId);
        var friend = yield _User.default.findById(friendId);

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
          throw 'You are not friends with this person';
        }
      } else {
        throw 'You have to provide both Id';
      }
    } catch (error) {
      throw error;
    }
  });

  return function deleteFriend(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

var findFriendByUserId = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(function* (_ref7) {
    var {
      userId
    } = _ref7;

    try {
      if (userId) {
        var currUser = yield _User.default.findById(userId);
        return yield _User.default.find({
          _id: {
            $in: currUser.friends
          }
        });
      } else {
        throw 'You do not have an user ID';
      }
    } catch (error) {
      throw error;
    }
  });

  return function findFriendByUserId(_x3) {
    return _ref6.apply(this, arguments);
  };
}();

var findStrangerByUserId = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(function* (_ref9) {
    var {
      userId
    } = _ref9;

    try {
      if (userId) {
        // if userId === userId,....
        var currUser = yield _User.default.findById(userId);
        return yield _User.default.find({
          _id: {
            $nin: currUser.friends
          }
        });
      } else {
        throw 'You do not have an user ID';
      }
    } catch (error) {
      throw error;
    }
  });

  return function findStrangerByUserId(_x4) {
    return _ref8.apply(this, arguments);
  };
}();

var findUserById = userId => {
  return _User.default.findById(userId);
};

var getCurrentUserByToken = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(function* (token) {
    try {
      var id = yield _jsonwebtoken.default.verify(token, jwtSecret);
      console.log(id);
      var {
        userId
      } = id;
      console.log(userId);
      return yield _User.default.findById(userId);
    } catch (error) {
      throw error;
    }
  });

  return function getCurrentUserByToken(_x5) {
    return _ref10.apply(this, arguments);
  };
}();

var updateProfile = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(function* (data) {
    var {
      field,
      value,
      userId
    } = data;

    try {
      var newUser = yield _User.default.findByIdAndUpdate(userId, {
        $set: {
          [field]: value
        }
      }, {
        new: true
      });

      if (newUser) {
        return {
          data: newUser,
          success: true
        };
      }

      return {
        data: 'User not found',
        success: false
      };
    } catch (error) {
      return {
        data: error.message,
        success: false
      };
    }
  });

  return function updateProfile(_x6) {
    return _ref11.apply(this, arguments);
  };
}();

var UserController = {
  fetchAllUsers,
  addFriend,
  deleteFriend,
  findFriendByUserId,
  findStrangerByUserId,
  findUserById,
  getCurrentUserByToken,
  updateProfile
};
var _default = UserController;
exports.default = _default;