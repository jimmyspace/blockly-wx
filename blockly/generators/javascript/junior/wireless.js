
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

goog.provide('Blockly.JavaScript.wireless');

goog.require('Blockly.JavaScript');


//自定义部分

Blockly.JavaScript['wire_send_num'] = function(block) {
  var num = Blockly.JavaScript.valueToCode(block, 'NUM',
        Blockly.JavaScript.ORDER_NONE) || '0';
  var code = 'await ccb.wire_send_num('+num+');\n';
  return code;
};

Blockly.JavaScript['wire_send_str'] = function(block) {
  var str = Blockly.JavaScript.valueToCode(block, 'STR',
        Blockly.JavaScript.ORDER_NONE) || '""';
  var code = 'await ccb.wire_send_str('+str+');\n';
  return code;
};

Blockly.JavaScript['wire_rec_num'] = function(block) {
  
  var code = 'await ccb.wire_rec_num()';
  return [code,Blockly.JavaScript.ORDER_UNARY_POSTFIX];
};

Blockly.JavaScript['wire_rec_str'] = function(block) {
  var code = 'await ccb.wire_rec_str()';
  return [code,Blockly.JavaScript.ORDER_UNARY_POSTFIX];
};




