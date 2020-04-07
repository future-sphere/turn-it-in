"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require('dotenv').config();

var jwtSecret = process.env.JWT_SECRET;

var verifyToken = token => _jsonwebtoken.default.verify(token, jwtSecret);

var register = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (data) {
    var {
      firstName,
      lastName,
      age,
      email,
      phone,
      password,
      friends
    } = data;

    try {
      var existed = yield _User.default.findOne({
        email
      });

      if (existed) {
        throw 'This email has been taken';
      }

      var newUser = _objectSpread({}, data);

      var encryptedPassword = _bcryptjs.default.hashSync(password);

      newUser.password = encryptedPassword;
      return _User.default.create(newUser);
    } catch (error) {
      throw error;
    }
  });

  return function register(_x) {
    return _ref.apply(this, arguments);
  };
}();

var handleLogin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (data) {
    var {
      email,
      password
    } = data;

    if (email && password) {
      try {
        var user = yield _User.default.findOne({
          email
        });

        if (user) {
          var passwordMatch = _bcryptjs.default.compareSync(password, user.password);

          if (passwordMatch) {
            var token = _jsonwebtoken.default.sign({
              userId: user._id
            }, jwtSecret);

            return {
              token
            };
          }

          throw 'Password does not match';
        }

        throw 'User email is not found';
      } catch (error) {
        throw error;
      }
    } else {
      throw 'No email or password is provided';
    }
  });

  return function handleLogin(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var AuthController = {
  register,
  handleLogin,
  verifyToken
};
var _default = AuthController;
exports.default = _default;