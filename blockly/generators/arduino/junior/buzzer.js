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

goog.provide('Blockly.Arduino.buzzer');

goog.require('Blockly.Arduino');


//自定义部分

Blockly.Arduino['buzzer_set_flag'] = function(block) {
  var buzzer_flag = block.getFieldValue('BUZZER_FLAG');
  var code = 'buzzer_set_flag('+buzzer_flag+');\n';
  Blockly.Arduino.buzzer.init();
  return code;
};


Blockly.Arduino['buzzer_speak_with_ms'] = function(block) {
  var ms = Blockly.Arduino.valueToCode(block, 'MS',
        Blockly.Arduino.ORDER_NONE) || '0';
  var code = 'buzzer_speak_with_ms('+ms+');\n';
  Blockly.Arduino.buzzer.init();
  return code;
};

Blockly.Arduino['buzzer_speak_with_s'] = function(block) {
  var s = Blockly.Arduino.valueToCode(block, 'S',
        Blockly.Arduino.ORDER_NONE) || '0';
  var code = 'buzzer_speak_with_s('+s+');\n';
  Blockly.Arduino.buzzer.init();
  return code;
};

Blockly.Arduino['buzzer_paly_music'] = function(block) {
  var music = block.getFieldValue('MUSIC');
  var code = 'buzzer_play_music('+music+');\n';
  Blockly.Arduino.addInclude('MUSIC_HEAD',
      '#include <Music.h>', true);
  return code;
};

Blockly.Arduino.buzzer.init = function(){
  Blockly.Arduino.addInclude('GO_HEAD',
      '#include <GeneralIO.h>', true);
  Blockly.Arduino.addSetup('BUZZER_INIT',
      'buzzer_init();', true);
}


