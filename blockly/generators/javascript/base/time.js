/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview JavaScript code generator for the Time blocks.
 *     JavaScript built-in function docs: http://JavaScript.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.JavaScript.time');

goog.require('Blockly.JavaScript');


/**
 * Code generator for the delay JavaScript block.
 * JavaScript code: loop { delay(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
 Blockly.JavaScript['time_delay'] = function(block) {
  var delayTime = Blockly.JavaScript.valueToCode(
      block, 'DELAY_TIME_MILI', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = 'await ccb.delay(' + delayTime + ');\n';
  return code;
};

/**
 * Code generator for the delayMicroseconds block.
 * JavaScript code: loop { delayMicroseconds(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
 Blockly.JavaScript['time_delaymicros'] = function(block) {
  var delayTimeMs = Blockly.JavaScript.valueToCode(
      block, 'DELAY_TIME_MICRO', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = 'await ccb.delayMicroseconds(' + delayTimeMs + ');\n';
  return code;
};

Blockly.JavaScript['time_delaymills'] = function(block) {
  var delayTimeS = Blockly.JavaScript.valueToCode(
      block, 'DELAY_TIME_MILL', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var delayTime =  parseInt(parseFloat(delayTimeS)*1000);
  var code = 'await ccb.delay(' + delayTime + ');\n';
  return code;
};

/**
 * Code generator for the elapsed time in milliseconds block.
 * JavaScript code: loop { millis() }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
 Blockly.JavaScript['time_millis'] = function(block) {
  var code = 'millis()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Code generator for the elapsed time in microseconds block.
 * JavaScript code: loop { micros() }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
 Blockly.JavaScript['time_micros'] = function(block) {
  var code = 'micros()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Code generator for the wait forever (end of program) block
 * JavaScript code: loop { while(true); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 * 停止为24小时
 */
 Blockly.JavaScript['infinite_loop'] = function(block) {
  return 'while (true) {\n  await ccb.delay(100);\n  if(ccb.codeUpdateIng) {break;}\n}\n';
};
