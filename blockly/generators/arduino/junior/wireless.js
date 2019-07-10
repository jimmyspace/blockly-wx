
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

goog.provide('Blockly.Arduino.wireless');

goog.require('Blockly.Arduino');


//自定义部分

Blockly.Arduino['wire_send_num'] = function(block) {
  var num = Blockly.Arduino.valueToCode(block, 'NUM',
        Blockly.Arduino.ORDER_NONE) || '0';
  var code = 'wire_send_num('+num+');\n';
  Blockly.Arduino.wireless.init();
  return code;
};

Blockly.Arduino['wire_send_str'] = function(block) {
  var str = Blockly.Arduino.valueToCode(block, 'STR',
        Blockly.Arduino.ORDER_NONE) || '""';
  var code = 'wire_send_str('+str+');\n';
  Blockly.Arduino.wireless.init();
  return code;
};

Blockly.Arduino['wire_rec_num'] = function(block) {
  var code = 'wire_rec_num()';
  Blockly.Arduino.wireless.init();
  return [code,Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino['wire_rec_str'] = function(block) {
  var code = 'wire_rec_str()';
  Blockly.Arduino.wireless.init();
  return [code,Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino.wireless.init = function(){
  Blockly.Arduino.addInclude('ACCEL_HEAD',
      '#include <Bluetooth.h>', true);
  Blockly.Arduino.addSetup('ACCEL_INIT',
      'Bluetooth_init();', true);
};




