/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview JavaScript code generator for the Servo library blocks.
 *     The JavaScript Servo library docs: http://JavaScript.cc/en/reference/servo
 *
 * TODO: If angle selector added to blocks edit code here.
 */
'use strict';

goog.provide('Blockly.JavaScript.servo');

goog.require('Blockly.JavaScript');


/**
 * Code generator to set an angle (Y) value to a servo pin (X).
 * JavaScript code: #include <Servo.h>
 *               Servo myServoX;
 *               setup { myServoX.attach(X); }
 *               loop  { myServoX.write(Y);  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.JavaScript['servo_write'] = function(block) {
  var pinKey = block.getFieldValue('SERVO_PIN');
  var servoAngle = Blockly.JavaScript.valueToCode(
      block, 'SERVO_ANGLE', Blockly.JavaScript.ORDER_ATOMIC) || '90';
  var servoName = 'myServo' + pinKey;

  Blockly.JavaScript.reservePin(
      block, pinKey, Blockly.JavaScript.PinTypes.SERVO, 'Servo Write');

  Blockly.JavaScript.addInclude('servo', '#include <Servo.h>');
  Blockly.JavaScript.addDeclaration('servo_' + pinKey, 'Servo ' + servoName + ';');

  var setupCode = servoName + '.attach(' + pinKey + ');';
  Blockly.JavaScript.addSetup('servo_' + pinKey, setupCode, true);

  var code = servoName + '.write(' + servoAngle + ');\n';
  return code;
};

/**
 * Code generator to read an angle value from a servo pin (X).
 * JavaScript code: #include <Servo.h>
 *               Servo myServoX;
 *               setup { myServoX.attach(X); }
 *               loop  { myServoX.read();    }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.JavaScript['servo_read'] = function(block) {
  var pinKey = block.getFieldValue('SERVO_PIN');
  var servoName = 'myServo' + pinKey;

  Blockly.JavaScript.reservePin(
      block, pinKey, Blockly.JavaScript.PinTypes.SERVO, 'Servo Read');

  Blockly.JavaScript.addInclude('servo', '#include <Servo.h>');
  Blockly.JavaScript.addDeclaration('servo_' + pinKey, 'Servo ' + servoName + ';');

  var setupCode = servoName + '.attach(' + pinKey + ');';
  Blockly.JavaScript.addSetup('servo_' + pinKey, setupCode, true);

  var code = servoName + '.read()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
