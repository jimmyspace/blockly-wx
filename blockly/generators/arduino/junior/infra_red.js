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

goog.provide('Blockly.Arduino.infra_red');

goog.require('Blockly.Arduino');


//自定义部分

Blockly.Arduino['infra_red_rec_num'] = function(block) {
  var code = 'infra_red_rec_num()';
  Blockly.Arduino.infra_red.init();
  return [code,Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino.infra_red.init = function(){
  Blockly.Arduino.addInclude('IRRECEIVE_HEAD',
      '#include <IRreceive.h>', true);
   Blockly.Arduino.addInclude('IRREMOTE_HEAD',
      '#include <IRremote.h>', true);
  Blockly.Arduino.addSetup('INFRA_INIT',
      'infra_init();', true);
};





