/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for the JavaScript serial blocks.
 *     JavaScript Serial library docs: https://www.JavaScript.cc/en/Reference/Serial
 *
 * TODO: There are more functions that can be added:
 *       http://JavaScript.cc/en/Reference/Serial
 */
'use strict';

goog.provide('Blockly.JavaScript.serial');

goog.require('Blockly.JavaScript');


/**
 * Code generator of block for writing to the serial com.
 * JavaScript code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.JavaScript['serial_print'] = function(block) {
  var serialId = block.getFieldValue('SERIAL_ID');
  var content = Blockly.JavaScript.valueToCode(
      block, 'CONTENT', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var checkbox_name = (block.getFieldValue('NEW_LINE') == 'TRUE');

  var serialPins = Blockly.JavaScript.Boards.selected.serialPins[serialId];
  for (var i = 0; i < serialPins.length; i++) {
    Blockly.JavaScript.reservePin(block, serialPins[i][1],
        Blockly.JavaScript.PinTypes.SERIAL, 'SERIAL ' + serialPins[i][0]);
  }

  if (checkbox_name) {
    var code = serialId + '.println(' + content + ');\n';
  } else {
    var code = serialId + '.print(' + content + ');\n';
  }
  return code;
};

/**
 * Code generator for block for setting the serial com speed.
 * JavaScript code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.JavaScript['serial_setup'] = function(block) {
  var serialId = block.getFieldValue('SERIAL_ID');
  var serialSpeed = block.getFieldValue('SPEED');
  var serialSetupCode = serialId + '.begin(' + serialSpeed + ');';
  Blockly.JavaScript.addSetup('serial_' + serialId, serialSetupCode, true);
  var code = '';
  return code;
};
