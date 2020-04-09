"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var paginate = (input, page) => {
  var itemsPerPage = 5;
  var maxPage = Math.ceil(input.length / itemsPerPage);

  if (input.length < itemsPerPage) {
    return {
      data: input,
      maxPage
    };
  } else {
    var skip = (page - 1) * itemsPerPage;
    var paged = input.slice(skip, skip + itemsPerPage > input.length ? input.length : skip + itemsPerPage);
    return {
      data: paged,
      maxPage
    };
  }
};

var _default = paginate;
exports.default = _default;