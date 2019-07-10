/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview JavaScript code generator for the text blocks.
 *     Partially implements the JavaScript Serial interface as described in:
 *     http://JavaScript.cc/en/Reference/Serial
 *
 * TODO: Too many calls to String constructor, which consumes a lot of uC
 *     resources. This will need revisiting for better type recognition.
 *
 * TODO: Trim generator is not correct.
 */
'use strict';

goog.provide('Blockly.JavaScript.digitron');

goog.require('Blockly.JavaScript');


//自定义部分

Blockly.JavaScript['digitron_show_num'] = function(block) {
  var num = Blockly.JavaScript.valueToCode(block, 'NUM',
        Blockly.JavaScript.ORDER_NONE) || '0';
  var code = 'await ccb.digitron_show_num('+num+');\n';
  return code;
};

Blockly.JavaScript['digitron_show_with_no'] = function(block) {
  var dig = block.getFieldValue('DIG');
  var num = block.getFieldValue('VAL');
  var code = 'await ccb.digitron_show_with_no("'+dig+'","'+num+'");\n';
  return code;
};