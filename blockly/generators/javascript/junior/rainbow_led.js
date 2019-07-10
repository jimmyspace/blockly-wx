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

goog.provide('Blockly.JavaScript.rainbow_led');

goog.require('Blockly.JavaScript');


//自定义部分

Blockly.JavaScript['rainbow_led_set_colour'] = function(block) {
  var colour = block.getFieldValue('COLOUR');
  var code = 'await ccb.rainbow_led_set_colour("'+colour+'");\n';
  return code;
};

Blockly.JavaScript['rainbow_led_set_colour_with_no'] = function(block) {
  var led_no = Blockly.JavaScript.valueToCode(block, 'LED_NO',
        Blockly.JavaScript.ORDER_UNARY_POSTFIX) || '0';
  var colour = block.getFieldValue('COLOUR');
  var code = 'await ccb.rainbow_led_set_colour_with_no('+led_no+',"'+colour+'");\n';
  return code;
};

Blockly.JavaScript['rainbow_led_set_rgb_with_no'] = function(block) {
  var led_no = Blockly.JavaScript.valueToCode(block, 'LED_NO',
        Blockly.JavaScript.ORDER_NONE) || '0';
  var colour_r = Blockly.JavaScript.valueToCode(block, 'COLOUR_R',
        Blockly.JavaScript.ORDER_NONE) || '0';
  var colour_g = Blockly.JavaScript.valueToCode(block, 'COLOUR_G',
        Blockly.JavaScript.ORDER_NONE) || '0';
  var colour_b = Blockly.JavaScript.valueToCode(block, 'COLOUR_B',
        Blockly.JavaScript.ORDER_NONE) || '0';
  var code = 'await ccb.rainbow_led_set_rgb_with_no('+led_no+','+colour_r+','+colour_g+','+colour_b+');\n';
  return code;
};




