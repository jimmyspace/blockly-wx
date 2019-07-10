/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the text blocks.
 *     Partially implements the Arduino Serial interface as described in:
 *     http://arduino.cc/en/Reference/Serial
 *
 * TODO: Too many calls to String constructor, which consumes a lot of uC
 *     resources. This will need revisiting for better type recognition.
 *
 * TODO: Trim generator is not correct.
 */
'use strict';

goog.provide('Blockly.Arduino.speed');

goog.require('Blockly.Arduino');


//自定义部分
//LED设置某个灯打开/熄灭（根据编号）
Blockly.Arduino['spped_get_acce'] = function(block) {
  var acce_direction = block.getFieldValue('ACCE_DIRECTION');
  var code = 'spped_get_acce('+acce_direction+')';
  Blockly.Arduino.speed.init();
  return [code,Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

//LED获取某个灯状态
Blockly.Arduino['speed_get_angu'] = function(block) {
  var angu_direction = block.getFieldValue('ANGU_DIRECTION');
  var code = 'speed_get_angu('+angu_direction+')';
  Blockly.Arduino.speed.init();
  return [code,Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino.speed.init = function(){
  Blockly.Arduino.addInclude('ACCEL_HEAD',
      '#include <accel.h>', true);
  Blockly.Arduino.addSetup('ACCEL_INIT',
      'accel_init();', true);
};



