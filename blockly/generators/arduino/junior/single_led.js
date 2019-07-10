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

goog.provide('Blockly.Arduino.single_led');

goog.require('Blockly.Arduino');


//自定义部分

Blockly.Arduino['single_led_set_flag'] = function(block) {
  var flag = block.getFieldValue('FLAG');
  var code = 'single_led_set_flag('+flag+');\n';
  Blockly.Arduino.single_led.init();
  return code;
};

Blockly.Arduino['single_led_get_flag'] = function(block) {
  var flag = block.getFieldValue('FLAG');
  var code = 'single_led_get_flag('+flag+')';
  Blockly.Arduino.single_led.init();
  return [code,Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino.single_led.init = function(){
  Blockly.Arduino.addInclude('GO_HEAD',
      '#include <GeneralIO.h>', true);
  Blockly.Arduino.addSetup('LED_INIT',
      'LED_init();', true);
};



