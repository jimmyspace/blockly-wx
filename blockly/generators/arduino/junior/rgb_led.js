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

goog.provide('Blockly.Arduino.rgb_led');

goog.require('Blockly.Arduino');


//自定义部分

Blockly.Arduino['rgb_led_set_flag_and_colour'] = function(block) {
  var flag = block.getFieldValue('FLAG');
  var colour = block.getFieldValue('COLOUR');
  var code = 'rgb_led_set_flag_and_colour('+flag+','+colour+');\n';
  Blockly.Arduino.rgb_led.init();
  return code;
};

Blockly.Arduino['rgb_led_get_flag_and_colour'] = function(block) {
  var flag = block.getFieldValue('FLAG');
  var colour = block.getFieldValue('COLOUR');
  var code = 'rgb_led_get_flag_and_colour('+flag+','+colour+')';
  Blockly.Arduino.rgb_led.init();
  return [code,Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino.rgb_led.init = function(){
  Blockly.Arduino.addInclude('GO_HEAD',
      '#include <GeneralIO.h>', true);
  Blockly.Arduino.addSetup('RGB_LED_INIT',
      'rgb_led_init();', true);
};



