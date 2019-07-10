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

goog.provide('Blockly.Arduino.potentiometer');

goog.require('Blockly.Arduino');


//自定义部分

Blockly.Arduino['potentiometer_get_value'] = function(block) {
  var code = 'potentiometer_get_value()';
  Blockly.Arduino.potentiometer.init();
  return [code,Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino.potentiometer.init = function(){
  Blockly.Arduino.addInclude('GO_HEAD',
      '#include <GeneralIO.h>', true);
  Blockly.Arduino.addSetup('ADC6_INIT',
      'ADC6_init();', true);
}






