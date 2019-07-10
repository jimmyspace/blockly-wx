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

goog.provide('Blockly.Arduino.steering');

goog.require('Blockly.Arduino');


//自定义部分

Blockly.Arduino['steering_turn_to'] = function(block) {
  var angle = Blockly.Arduino.valueToCode(block, 'ANGLE',
        Blockly.Arduino.ORDER_NONE) || '0';
  var code = 'steering_turn_to('+angle+');\n';
  Blockly.Arduino.steering.init();
  return code;
};

Blockly.Arduino['steering_get_angle'] = function(block) {
  var code = 'steering_get_angle()';
  Blockly.Arduino.steering.init();
  return [code,Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino['steering_turn_with_time'] = function(block) {
  var time = Blockly.Arduino.valueToCode(block, 'TIME',
        Blockly.Arduino.ORDER_NONE) || '0';
  var angle = Blockly.Arduino.valueToCode(block, 'ANGLE',
        Blockly.Arduino.ORDER_NONE) || '0';
  var code = 'steering_turn_with_time('+time+','+angle+');\n';
  Blockly.Arduino.steering.init();
  return code;
};

Blockly.Arduino.steering.init = function(){
  Blockly.Arduino.addInclude('GO_HEAD',
      '#include <GeneralIO.h>', true);
  Blockly.Arduino.addSetup('STEERING_INIT',
      'steering_init();', true);
}




