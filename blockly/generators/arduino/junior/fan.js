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

goog.provide('Blockly.Arduino.fan');

goog.require('Blockly.Arduino');


//自定义部分
//LED设置某个灯打开/熄灭（根据编号）
Blockly.Arduino['fan_set_flag'] = function(block) {
  var flag = block.getFieldValue('FLAG');
  var code = 'fan_set_flag('+flag+');\n';
  Blockly.Arduino.fan.init();
  return code;
};

//LED获取某个灯状态
Blockly.Arduino['fan_set_speed'] = function(block) {
  var speed = block.getFieldValue('SPEED');
  var code = 'fan_set_speed('+speed+');\n';
  Blockly.Arduino.fan.init();
  return code;
};

Blockly.Arduino.fan.init = function(){
  Blockly.Arduino.addInclude('GO_HEAD',
      '#include <GeneralIO.h>', true);
  Blockly.Arduino.addSetup('FAN_INIT',
      'fan_init();', true);
};




