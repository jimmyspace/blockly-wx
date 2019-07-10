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

goog.provide('Blockly.JavaScript.buzzer');

goog.require('Blockly.JavaScript');


//自定义部分

Blockly.JavaScript['buzzer_set_flag'] = function(block) {
  var buzzer_flag = block.getFieldValue('BUZZER_FLAG');
  var code = 'await ccb.buzzer_set_flag("'+buzzer_flag+'");\n';
  return code;
};


Blockly.JavaScript['buzzer_speak_with_ms'] = function(block) {
  var ms = Blockly.JavaScript.valueToCode(block, 'MS',
        Blockly.JavaScript.ORDER_NONE) || '0';
  var code = 'await ccb.buzzer_speak_with_ms('+ms+');\n';
  return code;
};

Blockly.JavaScript['buzzer_speak_with_s'] = function(block) {
  var s = Blockly.JavaScript.valueToCode(block, 'S',
        Blockly.JavaScript.ORDER_NONE) || '0';
  var code = 'await ccb.buzzer_speak_with_s('+s+');\n';
  return code;
};

Blockly.JavaScript['buzzer_paly_music'] = function(block) {
  var music = block.getFieldValue('MUSIC');
  var code = 'await ccb.buzzer_play_music("'+music+'");\n';
  return code;
};



