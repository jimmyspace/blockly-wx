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

goog.provide('Blockly.JavaScript.speed');

goog.require('Blockly.JavaScript');


//自定义部分
//LED设置某个灯打开/熄灭（根据编号）
Blockly.JavaScript['spped_get_acce'] = function(block) {
  var acce_direction = block.getFieldValue('ACCE_DIRECTION');
  var code = 'await ccb.spped_get_acce("'+acce_direction+'")';
  return [code,Blockly.JavaScript.ORDER_UNARY_POSTFIX];
};

//LED获取某个灯状态
Blockly.JavaScript['speed_get_angu'] = function(block) {
  var angu_direction = block.getFieldValue('ANGU_DIRECTION');
  var code = 'await ccb.speed_get_angu("'+angu_direction+'")';
  return [code,Blockly.JavaScript.ORDER_UNARY_POSTFIX];
};




