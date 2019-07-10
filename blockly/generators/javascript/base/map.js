/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for the JavaScript map functionality.
 *     JavaScript built-in function docs: http://JavaScript.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.JavaScript.map');

goog.require('Blockly.JavaScript');


/**
 * Code generator for the map block.
 * JavaScript code: loop { map(x, 0, 1024, 0, y) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.JavaScript['base_map'] = function(block) {
  var valueNum = Blockly.JavaScript.valueToCode(
      block, 'NUM', Blockly.JavaScript.ORDER_NONE) || '0';
  var valueDmax = Blockly.JavaScript.valueToCode(
      block, 'DMAX', Blockly.JavaScript.ORDER_ATOMIC) || '0';

  var code = 'map(' + valueNum + ', 0, 1024, 0, ' + valueDmax + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
