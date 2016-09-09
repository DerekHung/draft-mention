/* @flow */

import findWithRegex from 'find-with-regex';
import escapeRegExp from 'lodash/escapeRegExp';

export default (trigger: String) => (contentBlock: Object, callback: Function) => {
  findWithRegex(new RegExp(`(\\s|^)${escapeRegExp(trigger)}[\u4e00-\u9fa5_a-zA-Z0-9]*`, 'g'), contentBlock, callback);
};
