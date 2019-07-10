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

goog.provide('Blockly.Arduino.digitron');

goog.require('Blockly.Arduino');


//自定义部分

Blockly.Arduino['digitron_show_num'] = function(block) {
  var num = Blockly.Arduino.valueToCode(block, 'NUM',
        Blockly.Arduino.ORDER_NONE) || '0';
  var code = 'digitron_show_num('+num+');\n';
  Blockly.Arduino.digitron.init();
  return code;
};

Blockly.Arduino['digitron_show_with_no'] = function(block) {
  var dig = block.getFieldValue('DIG');
  var num = block.getFieldValue('VAL');
  var code = 'digitron_show_with_no('+dig+','+num+');\n';
  Blockly.Arduino.digitron.init();
  return code;
};

Blockly.Arduino.digitron.init = function(){
  Blockly.Arduino.addInclude('CH455_HEAD',
      '#include <ch455.h>', true);
  Blockly.Arduino.addSetup('CH455_INIT',
      'ch455_init();', true);
};
