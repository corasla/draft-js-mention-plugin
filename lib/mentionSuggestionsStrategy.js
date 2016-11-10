'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _findWithRegex = require('find-with-regex');

var _findWithRegex2 = _interopRequireDefault(_findWithRegex);

var _lodash = require('lodash.escaperegexp');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (trigger) {
  return function (contentBlock, callback) {
    // const HASHTAG_REGEX = /(?:(^|[ ]))${escapeRegExp(trigger)}([a-zA-Z0-9][a-zA-Z0-9]*)(?!\S)+/g;
    var HASHTAG_REGEX = /(?:(^|[\s]))#([a-zA-Z0-9üöäÜÖÄ][a-zA-Z0-9üöäÜÖÄ]*)(?!\S)+/g;
    (0, _findWithRegex2.default)(HASHTAG_REGEX, contentBlock, callback);
    // findWithRegex(new RegExp(`(\\s|^)${escapeRegExp(trigger)}[\\w\u4e00-\u9eff]*`, 'g'), contentBlock, callback);
  };
};