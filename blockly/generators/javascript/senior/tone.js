/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for JavaScript Digital and Analogue input/output.
 *     JavaScript built in function docs: http://JavaScript.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.JavaScript.tone');

goog.require('Blockly.JavaScript');


/**
 * Function for turning the tone library on on a given pin (X).
 * JavaScript code: setup { pinMode(X, OUTPUT) }
 *               loop  { tone(X, frequency) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */

Blockly.JavaScript['io_tone'] = function(block) {
  var pin = block.getFieldValue('TONEPIN');
  var freq = Blockly.JavaScript.valueToCode(block, 'FREQUENCY', Blockly.JavaScript.ORDER_ATOMIC);
  Blockly.JavaScript.reservePin(
      block, pin, Blockly.JavaScript.PinTypes.OUTPUT, 'Tone Pin');

  var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);\n';
  Blockly.JavaScript.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'tone(' + pin + ',' + freq + ');\n';
  return code;
};

Blockly.JavaScript['io_notone'] = function(block) {
  var pin = block.getFieldValue("TONEPIN");
  Blockly.JavaScript.reservePin(
      block, pin, Blockly.JavaScript.PinTypes.OUTPUT, 'Tone Pin');
  
  var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);\n';
  Blockly.JavaScript.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'noTone(' + pin + ');\n';
  return code;
};
