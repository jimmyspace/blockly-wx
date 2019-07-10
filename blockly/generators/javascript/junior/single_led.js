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

goog.provide('Blockly.JavaScript.single_led');

goog.require('Blockly.JavaScript');


//自定义部分

Blockly.JavaScript['single_led_set_flag'] = function(block) {
  var flag = block.getFieldValue('FLAG');
  var code = 'await ccb.single_led_set_flag("'+flag+'");\n';
  return code;
};

Blockly.JavaScript['single_led_get_flag'] = function(block) {
  var flag = block.getFieldValue('FLAG');
  var code = 'await ccb.single_led_get_flag("'+flag+'")';
  return [code,Blockly.JavaScript.ORDER_UNARY_POSTFIX];
};




