/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for JavaScript Digital and Analogue input/output.
 *     JavaScript built in function docs: http://JavaScript.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.JavaScript.IO');

goog.require('Blockly.JavaScript');


/**
 * Function for 'set pin' (X) to a state (Y).
 * JavaScript code: setup { pinMode(X, OUTPUT); }
 *               loop  { digitalWrite(X, Y); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.JavaScript['io_digitalwrite'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var stateOutput = Blockly.JavaScript.valueToCode(
      block, 'STATE', Blockly.JavaScript.ORDER_ATOMIC) || 'LOW';

  Blockly.JavaScript.reservePin(
      block, pin, Blockly.JavaScript.PinTypes.OUTPUT, 'Digital Write');

  var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);';
  Blockly.JavaScript.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'digitalWrite(' + pin + ', ' + stateOutput + ');\n';
  return code;
};

/**
 * Function for reading a digital pin (X).
 * JavaScript code: setup { pinMode(X, INPUT); }
 *               loop  { digitalRead(X)     }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.JavaScript['io_digitalread'] = function(block) {
  var pin = block.getFieldValue('PIN');
  Blockly.JavaScript.reservePin(
      block, pin, Blockly.JavaScript.PinTypes.INPUT, 'Digital Read');

  var pinSetupCode = 'pinMode(' + pin + ', INPUT);';
  Blockly.JavaScript.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'digitalRead(' + pin + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Function for setting the state (Y) of a built-in LED (X).
 * JavaScript code: setup { pinMode(X, OUTPUT); }
 *               loop  { digitalWrite(X, Y); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.JavaScript['io_builtin_led'] = function(block) {
  var pin = block.getFieldValue('BUILT_IN_LED');
  var stateOutput = Blockly.JavaScript.valueToCode(
      block, 'STATE', Blockly.JavaScript.ORDER_ATOMIC) || 'LOW';

  Blockly.JavaScript.reservePin(
      block, pin, Blockly.JavaScript.PinTypes.OUTPUT, 'Set LED');

  var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);';
  Blockly.JavaScript.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'digitalWrite(' + pin + ', ' + stateOutput + ');\n';
  return code;
};

/**
 * Function for setting the state (Y) of an analogue output (X).
 * JavaScript code: setup { pinMode(X, OUTPUT); }
 *               loop  { analogWrite(X, Y);  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.JavaScript['io_analogwrite'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var stateOutput = Blockly.JavaScript.valueToCode(
      block, 'NUM', Blockly.JavaScript.ORDER_ATOMIC) || '0';

  Blockly.JavaScript.reservePin(
      block, pin, Blockly.JavaScript.PinTypes.OUTPUT, 'Analogue Write');

  var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);';
  Blockly.JavaScript.addSetup('io_' + pin, pinSetupCode, false);

  // Warn if the input value is out of range
  if ((stateOutput < 0) || (stateOutput > 255)) {
    block.setWarningText('The analogue value set must be between 0 and 255',
                         'pwm_value');
  } else {
    block.setWarningText(null, 'pwm_value');
  }

  var code = 'analogWrite(' + pin + ', ' + stateOutput + ');\n';
  return code;
};

/**
 * Function for reading an analogue pin value (X).
 * JavaScript code: setup { pinMode(X, INPUT); }
 *               loop  { analogRead(X)      }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.JavaScript['io_analogread'] = function(block) {
  var pin = block.getFieldValue('PIN');
  Blockly.JavaScript.reservePin(
      block, pin, Blockly.JavaScript.PinTypes.INPUT, 'Analogue Read');

  var pinSetupCode = 'pinMode(' + pin + ', INPUT);';
  Blockly.JavaScript.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'analogRead(' + pin + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Value for defining a digital pin state.
 * JavaScript code: loop { HIGH / LOW }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.JavaScript['io_highlow'] = function(block) {
  var code = block.getFieldValue('STATE');
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['io_pulsein'] = function(block) {
  var pin = block.getFieldValue("PULSEPIN");
  var type = Blockly.JavaScript.valueToCode(block, "PULSETYPE", Blockly.JavaScript.ORDER_ATOMIC);

  Blockly.JavaScript.reservePin(
      block, pin, Blockly.JavaScript.PinTypes.INPUT, 'Pulse Pin');

  var pinSetupCode = 'pinMode(' + pin + ', INPUT);\n';
  Blockly.JavaScript.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'pulseIn(' + pin + ', ' + type + ')';

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['io_pulsetimeout'] = function(block) {
  var pin = block.getFieldValue("PULSEPIN");
  var type = Blockly.JavaScript.valueToCode(block, "PULSETYPE", Blockly.JavaScript.ORDER_ATOMIC);
  var timeout = Blockly.JavaScript.valueToCode(block, "TIMEOUT", Blockly.JavaScript.ORDER_ATOMIC);

  Blockly.JavaScript.reservePin(
      block, pin, Blockly.JavaScript.PinTypes.INPUT, 'Pulse Pin');

  var pinSetupCode = 'pinMode(' + pin + ', INPUT);\n';
  Blockly.JavaScript.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'pulseIn(' + pin + ', ' + type + ', ' + timeout + ')';

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
}; 
