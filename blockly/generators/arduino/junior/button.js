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

goog.provide('Blockly.Arduino.button');

goog.require('Blockly.Arduino');


//自定义部分
//LED设置某个灯打开/熄灭（根据编号）
Blockly.Arduino['but_on_flag'] = function(block) {
  var but = block.getFieldValue('BUT');
  var code = 'but_on_flag('+but+')';
  Blockly.Arduino.button.init();
  return [code,Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

//LED获取某个灯状态
Blockly.Arduino['but_get_flag'] = function(block) {
 var but_flag = block.getFieldValue('BUT_FLAG');
  var code = 'but_get_flag(BUT_F,'+but_flag+')';
  Blockly.Arduino.button.init();
  return [code,Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino.button.init = function(){
  Blockly.Arduino.addInclude('GO_HEAD',
      '#include <GeneralIO.h>', true);
  Blockly.Arduino.addSetup('BUTTON_INIT',
      'but_init();', true);
}




