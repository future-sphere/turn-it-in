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

var addFriend = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (data) {
    var {
      userId,
      friendId
    } = data;

    try {
      if (userId === friendId) throw 'You cannot add yourself as friend';

      if (userId && friendId) {
        var user = yield _User.default.findById(userId);

        if (user.friends.includes(friendId)) {
          throw 'You are already friends with this user ';
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
        throw 'You need to provide both userId and friendId ';
      }
    } catch (error) {
      throw error;
    }
  });

  return function addFriend(_x) {
    return _ref.apply(this, arguments);
  };
}();

var deleteFriend = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (data) {
    var {
      userId,
      friendId
    } = data;

    try {
      if (userId === friendId) throw 'You cannot delete yourself ';

      if (userId && friendId) {
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
        throw 'You need to provide both userId and friendId ';
      }
    } catch (error) {
      throw error;
    }
  });

  return function deleteFriend(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var fetchFriendsByUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (data) {
    var {
      userId,
      pageNumber
    } = data;

    try {
      var page = +pageNumber;
      var currUser = yield _User.default.findById(userId);
      var allFriends = yield _User.default.find({
        _id: {
          $in: currUser.friends
        }
      });

      if (page <= parseInt(allFriends.length / 10) && page > 0 && Math.floor(page) === page) {
        return allFriends.slice((page - 1) * 10, page * 10);
      } else if (page == parseInt(allFriends.length / 10) + 1) {
        return allFriends.slice((page - 1) * 10);
      } else if (page > parseInt(allFriends.length / 10)) {
        throw "The largest page number is ".concat(parseInt(allFriends.length / 10) + 1);
      } else {
        throw 'The page number you enter is wrong';
      }
    } catch (error) {
      throw error;
    }
  });

  return function fetchFriendsByUser(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var fetchStrangersByUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (data) {
    var {
      userId,
      pageNumber
    } = data;

    try {
      var page = +pageNumber;
      var currUser = yield _User.default.findById(userId);
      currUser.friends.push(userId);
      var allStrangers = yield _User.default.find({
        _id: {
          $nin: currUser.friends
        }
      });

      if (page <= parseInt(allStrangers.length / 10) && page > 0 && Math.floor(page) === page) {
        return allStrangers.slice((page - 1) * 10, page * 10);
      } else if (page == parseInt(allStrangers.length / 10) + 1) {
        return allStrangers.slice((page - 1) * 10);
      } else if (page > parseInt(allStrangers.length / 10)) {
        throw "The largest page number is ".concat(parseInt(allStrangers.length / 10) + 1);
      } else {
        throw 'The page number you enter is wrong';
      }
    } catch (error) {
      throw error;
    }
  });

  return function fetchStrangersByUser(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

var updateProfile = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (data) {
    var {
      userId,
      key,
      value
    } = data;

    try {
      if (userId && key && value) {
        return yield _User.default.findByIdAndUpdate(userId, {
          $set: {
            [key]: value
          }
        }, {
          new: true
        });
      } else throw 'Messing some data';
    } catch (error) {
      throw error;
    }
  });

  return function updateProfile(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

var UserController = {
  addFriend,
  deleteFriend,
  fetchFriendsByUser,
  fetchStrangersByUser,
  updateProfile
};
var _default = UserController;
exports.default = _default;