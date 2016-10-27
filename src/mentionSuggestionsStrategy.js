/* @flow */

import findWithRegex from 'find-with-regex';
import escapeRegExp from 'lodash.escaperegexp';
export default (trigger: String) => (contentBlock: Object, callback: Function) => {
  // const HASHTAG_REGEX = /(?:(^|[ ]))${escapeRegExp(trigger)}([a-zA-Z0-9][a-zA-Z0-9]*)(?!\S)+/g;
  const HASHTAG_REGEX = /(?:(^|[ ]))#([a-zA-Z0-9][a-zA-Z0-9]*)(?!\S)+/g;
  findWithRegex(HASHTAG_REGEX, contentBlock, callback);
  // findWithRegex(new RegExp(`(\\s|^)${escapeRegExp(trigger)}[\\w\u4e00-\u9eff]*`, 'g'), contentBlock, callback);
};
