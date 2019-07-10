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

goog.provide('Blockly.Arduino.rainbow_led');

goog.require('Blockly.Arduino');


//自定义部分

Blockly.Arduino['rainbow_led_set_colour'] = function(block) {
  var colour = block.getFieldValue('COLOUR');
  switch(colour){
    case '#ff0000':
      colour = 'RAINBOW_RED';
      break;
    case '#ff7f00':
      colour = 'RAINBOW_ORANGE';
      break;
    case '#ffff00':
      colour = 'RAINBOW_YELLOW';
      break;
    case '#00ff00':
      colour = 'RAINBOW_GREEN';
      break;
    case '#00ffff':
      colour = 'RAINBOW_CYAN';
      break;
    case '#0000ff':
      colour = 'RAINBOW_BLUE';
      break;
    case '#8b00ff':
      colour = 'RAINBOW_PURPLE';
      break;

  }
  var code = 'rainbow_led_set_colour('+colour+');\n';
  Blockly.Arduino.rainbow_led.init();
  return code;
};

Blockly.Arduino['rainbow_led_set_colour_with_no'] = function(block) {
  var led_no = Blockly.Arduino.valueToCode(block, 'LED_NO',
        Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var colour = block.getFieldValue('COLOUR');
  switch(colour){
    case '#ff0000':
      colour = 'RAINBOW_RED';
      break;
    case '#ff7f00':
      colour = 'RAINBOW_ORANGE';
      break;
    case '#ffff00':
      colour = 'RAINBOW_YELLOW';
      break;
    case '#00ff00':
      colour = 'RAINBOW_GREEN';
      break;
    case '#00ffff':
      colour = 'RAINBOW_CYAN';
      break;
    case '#0000ff':
      colour = 'RAINBOW_BLUE';
      break;
    case '#8b00ff':
      colour = 'RAINBOW_PURPLE';
      break;

  }
  var code = 'rainbow_led_set_colour_with_no('+led_no+','+colour+');\n';
  Blockly.Arduino.rainbow_led.init();
  return code;
};

Blockly.Arduino['rainbow_led_set_rgb_with_no'] = function(block) {
  var led_no = Blockly.Arduino.valueToCode(block, 'LED_NO',
        Blockly.Arduino.ORDER_NONE) || '0';
  var colour_r = Blockly.Arduino.valueToCode(block, 'COLOUR_R',
        Blockly.Arduino.ORDER_NONE) || '0';
  var colour_g = Blockly.Arduino.valueToCode(block, 'COLOUR_G',
        Blockly.Arduino.ORDER_NONE) || '0';
  var colour_b = Blockly.Arduino.valueToCode(block, 'COLOUR_B',
        Blockly.Arduino.ORDER_NONE) || '0';
  var code = 'rainbow_led_set_rgb_with_no('+led_no+','+colour_r+','+colour_g+','+colour_b+');\n';
  Blockly.Arduino.rainbow_led.init();
  return code;
};

Blockly.Arduino.rainbow_led.init = function(){
  Blockly.Arduino.addInclude('WS2812_HEAD',
      '#include <ws2812.h>', true);
  Blockly.Arduino.addSetup('RAINBOW_LED_INIT',
      'ws2812_init();', true);
};




