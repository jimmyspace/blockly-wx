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

goog.provide('Blockly.JavaScript.text');

goog.require('Blockly.JavaScript');


/**
 * Code generator for a literal String (X).
 * JavaScript code: loop { "X" }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.JavaScript['text'] = function(block) {
  var code = Blockly.JavaScript.quote_(block.getFieldValue('TEXT'));
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Code generator for a String concatenation (X...Y). This string can be made
 * up of any number of elements of any type.
 * This block uses a mutator.
 * String construction info: http://JavaScript.cc/en/Reference/StringConstructor
 * JavaScript code: loop { "String(X)" + ... + "String(Y)" }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.JavaScript['text_join'] = function(block) {
  var code;
  if (block.itemCount_ == 0) {
    return ['""', Blockly.JavaScript.ORDER_ATOMIC];
  } else if (block.itemCount_ == 1) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'ADD0',
        Blockly.JavaScript.ORDER_UNARY_POSTFIX) || '""';
    code = argument0 ;
    return [code, Blockly.JavaScript.ORDER_UNARY_POSTFIX];
  } else {
    var argument;
    code = [];
    for (var n = 0; n < block.itemCount_; n++) {
      argument = Blockly.JavaScript.valueToCode(
          block, 'ADD' + n, Blockly.JavaScript.ORDER_NONE);
      if (argument == '') {
        code[n] = '""';
      } else {
        code[n] = argument ;
      }
    }
    code = code.join(' + ');
    return [code, Blockly.JavaScript.ORDER_UNARY_POSTFIX];
  }
};

/**
 * Code generator for appending text (Y) to a variable in place (X).
 * String constructor info: http://JavaScript.cc/en/Reference/StringConstructor
 * JavaScript code: loop { X += String(Y) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.JavaScript['text_append'] = function(block) {
  // Append to a variable in place.
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_UNARY_POSTFIX);
  if (argument0 == '') {
    argument0 = '""';
  } else {
    argument0 = 'String(' + argument0 + ')';
  }
  return varName + ' += ' + argument0 + ';\n';
};

/**
 * Code generator to get the length of a string (X).
 * String length info: http://JavaScript.cc/en/Reference/StringLength
 * JavaScript code: loop { String(X).length() }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.JavaScript['text_length'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_UNARY_POSTFIX) || '""';
  var code = argument0 + '.length()';
  return [code, Blockly.JavaScript.ORDER_UNARY_POSTFIX];
};

/**
 * Code generator to test if a string (X) is null/empty.
 * String length info: http://JavaScript.cc/en/Reference/StringLength
 * JavaScript code: boolean isStringEmpty(...) { ... }
 *               loop { isStringEmpty(X) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.JavaScript['text_isEmpty'] = function(block) {
  var func = [];
  func.push('boolean ' + Blockly.JavaScript.DEF_FUNC_NAME + '(String msg) {');
  func.push('  if (msg.length() == 0) {');
  func.push('    return true;');
  func.push('  } else {');
  func.push('    return false;');
  func.push('  }');
  func.push('}');
  var funcName = Blockly.JavaScript.addFunction('isStringEmpty', func.join('\n'));
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_UNARY_POSTFIX);
  if (argument0 == '') {
    argument0 = '""';
  } else {
    argument0 = 'String(' + argument0 + ')';
  }
  var code = funcName + '(' + argument0 + ')';
  return [code, Blockly.JavaScript.ORDER_UNARY_POSTFIX];
};

/**
 * Code generator to trim spaces from a string (X).
 * String trim info: http://JavaScript.cc/en/Tutorial/StringLengthTrim
 * JavaScript code: loop { String(X).trim() }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.JavaScript['text_trim'] = function(block) {
  // Trim spaces.
  Blockly.JavaScript.text_trim.OPERATORS = {
    LEFT: '.trim()',
    RIGHT: '.trim()',
    BOTH: '.trim()'
  };
  var mode = block.getFieldValue('MODE');
  var operator = Blockly.JavaScript.text_trim.OPERATORS[mode];
  var argument0 = Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_UNARY_POSTFIX);
  if (argument0 == '') {
    argument0 = '""';
  } else {
    argument0 = 'String(' + argument0 + ')';
  }
  return [argument0 + operator, Blockly.JavaScript.ORDER_UNARY_POSTFIX];
};

/**
 * Code generator to print to the serial comm.
 * Serial info: http://JavaScript.cc/en/Reference/Serial
 * JavaScript code: setup { Serial.begin(9600);     }
 *               loop  { Serial.print(String(X)) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.JavaScript['text_print'] = function(block) {
  var serialId = Blockly.JavaScript.Boards.selected.serial[0][1];
  var setupCode = serialId + '.begin(9600);';
  Blockly.JavaScript.addSetup('serial_' + serialId, setupCode, false);
  var argument0 = Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_NONE);
  if (argument0 == '') {
    argument0 = '""';
  } else {
    argument0 = 'String(' + argument0 + ')';
  }
  return serialId + '.print(' + argument0 + ');\n';
};

/**
 * Code generator to prompt the user with a string (X) and request input.
 * Serial info: http://JavaScript.cc/en/Reference/Serial
 * JavaScript code: getUserInputPrompt(...) { ... }
 *               loop { getUserInputPrompt("X")) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.JavaScript['text_prompt_ext'] = function(block) {
  // Get the first Serial peripheral of JavaScript board
  var serialId = Blockly.JavaScript.Boards.selected.serial[0][1];
  var returnType = block.getFieldValue('TYPE');

  // The function code changes based on reading a number or string
  var func = [];
  var toNumber = returnType == Blockly.Types.NUMBER.output;
  if (toNumber) {
    func.push('int ' + Blockly.JavaScript.DEF_FUNC_NAME + '(String msg) {');
  } else {
    func.push('String ' + Blockly.JavaScript.DEF_FUNC_NAME + '(String msg) {');
  }
  func.push('  ' + serialId + '.println(msg);');
  func.push('  boolean stringComplete = false;');
  if (toNumber) {
    func.push('  int content = 0;');// + serialId + '.parseInt();');
  } else {
    func.push('  String content = "";');
  }
  func.push('  while (stringComplete == false) {');
  func.push('    if (' + serialId + '.available()) {');
  if (toNumber) {
    func.push('      content = ' + serialId + '.parseInt();');
    func.push('      stringComplete = true;');
  } else {
    func.push('      char readChar = (char)' + serialId + '.read();');
    func.push('      if (readChar == \'\\n\' || readChar == \'\\r\') {');
    func.push('        stringComplete = true;');
    func.push('      } else {');
    func.push('        content += readChar;');
    func.push('      }');
  }
  func.push('    }');
  func.push('  }');
  func.push('  // Empty incoming serial buffer');
  func.push('  while(Serial.available()) { Serial.read(); };');
  func.push('  return content;');
  func.push('}');
  var funcName = Blockly.JavaScript.addFunction(
      'getUserInputPrompt' + returnType, func.join('\n'));

  // Only overwrite the serial set up if not present already
  var setupCode = serialId + '.begin(9600);';
  Blockly.JavaScript.addSetup('serial_' + serialId, setupCode, false);

  var msg = Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_NONE) || '""';
  var code = funcName + '(' + msg + ')';

  return [code, Blockly.JavaScript.ORDER_UNARY_POSTFIX];
};


/* ***************************************************************** *
 * The rest of the blocks have been left unimplemented, as they have *
 * been removed from the toolbox and not used for JavaScript code.      *
 * ***************************************************************** */
Blockly.JavaScript['text_endString'] = function(block) {
  return ['', Blockly.JavaScript.ORDER_UNARY_POSTFIX];
};

Blockly.JavaScript['text_indexOf'] = function(block) {
  return ['', Blockly.JavaScript.ORDER_UNARY_POSTFIX];
};

Blockly.JavaScript['text_charAt'] = function(block) {
  return ['', Blockly.JavaScript.ORDER_UNARY_POSTFIX];
};

Blockly.JavaScript['text_getSubstring'] = function(block) {
  return ['', Blockly.JavaScript.ORDER_UNARY_POSTFIX];
};

Blockly.JavaScript['text_changeCase'] = function(block) {
  return ['', Blockly.JavaScript.ORDER_UNARY_POSTFIX];
};

Blockly.JavaScript['text_prompt'] = function(block) {
  return ['', Blockly.JavaScript.ORDER_UNARY_POSTFIX];
};


//自定义部分
//字符串比较
Blockly.JavaScript['text_compare'] = function(block) {
  var str1 = Blockly.JavaScript.valueToCode(block, 'STR1',
      Blockly.JavaScript.ORDER_UNARY_POSTFIX) || '\"\"';
  var str2 = Blockly.JavaScript.valueToCode(block, 'STR2',
      Blockly.JavaScript.ORDER_UNARY_POSTFIX) || '\"\"';
  var code = str1+' == '+str2;
  return [code, Blockly.JavaScript.ORDER_UNARY_POSTFIX];
};
//字符串截取
Blockly.JavaScript['text_subsrting'] = function(block) {
  var str = Blockly.JavaScript.valueToCode(block, 'STR',
      Blockly.JavaScript.ORDER_UNARY_POSTFIX) || '\"\"';
  var start = Blockly.JavaScript.valueToCode(block, 'START',
      Blockly.JavaScript.ORDER_UNARY_POSTFIX) || '\"\"';
  var length = Blockly.JavaScript.valueToCode(block, 'LENGTH',
      Blockly.JavaScript.ORDER_UNARY_POSTFIX) || '\"\"';
  var code = str+'.substring('+start+','+length+')';
  return [code, Blockly.JavaScript.ORDER_UNARY_POSTFIX];
};
//字符串转int
Blockly.JavaScript['text_parse_int'] = function(block) {
  var str = Blockly.JavaScript.valueToCode(block, 'STR',
      Blockly.JavaScript.ORDER_UNARY_POSTFIX) || '\"\"';
  var code = 'parseInt('+str+')';
  return [code, Blockly.JavaScript.ORDER_UNARY_POSTFIX];
};
//int转字符串
Blockly.JavaScript['int_to_text'] = function(block) {
  var num = Blockly.JavaScript.valueToCode(block, 'NUM',
      Blockly.JavaScript.ORDER_UNARY_POSTFIX) || '\"\"';
  var code = num + '.toString()';
  return [code, Blockly.JavaScript.ORDER_UNARY_POSTFIX];
};
//字符串根据索引获取字符
Blockly.JavaScript['text_get_char'] = function(block) {
  var str = Blockly.JavaScript.valueToCode(block, 'STR',
      Blockly.JavaScript.ORDER_UNARY_POSTFIX) || '\"\"';
  var index = Blockly.Arduino.valueToCode(block, 'INDEX',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var code = str+'.charAt('+index+')';
  return [code, Blockly.JavaScript.ORDER_UNARY_POSTFIX];
};
