"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = new _mongoose.default.Schema({
  email: String,
  password: String,
  phone: Number,
  firstName: String,
  lastName: String,
  age: Number,
  gender: String,
  street: String,
  city: String,
  state: String,
  zip: Number,
  avatar: String,
  friends: [String]
});

var Users = _mongoose.default.model('Users', UserSchema);

var _default = Users;
exports.default = _default;