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

goog.provide('Blockly.JavaScript.fan');

goog.require('Blockly.JavaScript');


//自定义部分
//LED设置某个灯打开/熄灭（根据编号）
Blockly.JavaScript['fan_set_flag'] = function(block) {
  var flag = block.getFieldValue('FLAG');
  var code = 'await ccb.fan_set_flag("'+flag+'");\n';
  return code;
};

//LED获取某个灯状态
Blockly.JavaScript['fan_set_speed'] = function(block) {
  var speed = block.getFieldValue('SPEED');
  var code = 'await ccb.fan_set_speed("'+speed+'");\n';
  return code;
};




