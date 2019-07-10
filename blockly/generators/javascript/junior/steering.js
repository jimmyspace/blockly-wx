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

goog.provide('Blockly.JavaScript.steering');

goog.require('Blockly.JavaScript');


//自定义部分

Blockly.JavaScript['steering_turn_to'] = function(block) {
  var angle = Blockly.JavaScript.valueToCode(block, 'ANGLE',
        Blockly.JavaScript.ORDER_NONE) || '0';
  var code = 'await ccb.steering_turn_to('+angle+');\n';
  return code;
};

Blockly.JavaScript['steering_get_angle'] = function(block) {
  var code = 'await ccb.steering_get_angle()';
  return [code,Blockly.JavaScript.ORDER_UNARY_POSTFIX];
};

Blockly.JavaScript['steering_turn_with_time'] = function(block) {
  var time = Blockly.JavaScript.valueToCode(block, 'TIME',
        Blockly.JavaScript.ORDER_NONE) || '0';
  var angle = Blockly.JavaScript.valueToCode(block, 'ANGLE',
        Blockly.JavaScript.ORDER_NONE) || '0';
  var code = 'await ccb.steering_turn_with_time('+time+','+angle+');\n';
  return code;
};




