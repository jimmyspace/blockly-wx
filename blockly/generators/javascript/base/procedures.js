/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Generating JavaScript code for procedure (function) blocks.
 *
 * TODO: For now all variables will stay at "int". Once type is implemented
 *       it needs to be captured on the functions with return.
 */
'use strict';

goog.provide('Blockly.JavaScript.procedures');

goog.require('Blockly.JavaScript');


/**
 * Code generator to create a function with a return value (X).
 * JavaScript code: function functionname { return X }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {null} There is no code added to loop.
 */
Blockly.JavaScript['procedures_defreturn'] = function(block) {
  var funcName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var branch = Blockly.JavaScript.statementToCode(block, 'STACK');
  if (Blockly.JavaScript.STATEMENT_PREFIX) {
    branch = Blockly.JavaScript.prefixLines(
        Blockly.JavaScript.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + block.id + '\''), Blockly.JavaScript.INDENT) + branch;
  }
  if (Blockly.JavaScript.INFINITE_LOOP_TRAP) {
    branch = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + block.id + '\'') + branch;
  }
  var returnValue = Blockly.JavaScript.valueToCode(block, 'RETURN',
      Blockly.JavaScript.ORDER_NONE) || '';
  if (returnValue) {
    returnValue = '  return ' + returnValue + ';\n';
  }

  // Get arguments with type
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] =
        Blockly.JavaScript.getJavaScriptType_(block.getArgType(block.arguments_[x])) +
        ' ' +
        Blockly.JavaScript.variableDB_.getName(block.arguments_[x],
            Blockly.Variables.NAME_TYPE);
  }

  // Get return type
  /*var returnType = Blockly.Types.NULL;
  if (block.getReturnType) {
    returnType = block.getReturnType();
  }
  returnType = Blockly.JavaScript.getJavaScriptType_(returnType);*/

  // Construct code
  //var code = returnType + ' ' + funcName + '(' + args.join(', ') + ') {\n' +
  var code = 'async function' + ' ' + funcName + '(' + args.join(', ') + ') {\n' +
      branch + returnValue + '}';
  code = Blockly.JavaScript.scrub_(block, code);
  Blockly.JavaScript.userFunctions_[funcName] = code;
  return null;
};

/**
 * Code generator to create a function without a return value.
 * It uses the same code as with return value, as it will maintain the function
 * type.
 * JavaScript code: function functionname { }
 */
Blockly.JavaScript['procedures_defnoreturn'] =
    Blockly.JavaScript['procedures_defreturn'];

/**
 * Code generator to create a function call with a return value.
 * JavaScript code: loop { functionname() }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.JavaScript['procedures_callreturn'] = function(block) {
  var funcName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.JavaScript.valueToCode(block, 'ARG' + x,
        Blockly.JavaScript.ORDER_NONE) || 'null';
  }
  var code = 'await ' + funcName + '(' + args.join(', ') + ')';
  return [code, Blockly.JavaScript.ORDER_UNARY_POSTFIX];
};

/**
 * Code generator to create a function call without a return value.
 * JavaScript code: loop { functionname() }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.JavaScript['procedures_callnoreturn'] = function(block) {
  var funcName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.JavaScript.valueToCode(block, 'ARG' + x,
        Blockly.JavaScript.ORDER_NONE) || 'null';
  }
  var code = 'await ' + funcName + '(' + args.join(', ') + ');\n';
  return code;
};

/**
 * Code generator to create a conditional (X) return value (Y) for a function.
 * JavaScript code: if (X) { return Y; }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.JavaScript['procedures_ifreturn'] = function(block) {
  var condition = Blockly.JavaScript.valueToCode(block, 'CONDITION',
      Blockly.JavaScript.ORDER_NONE) || 'false';
  var code = 'if (' + condition + ') {\n';
  if (block.hasReturnValue_) {
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE',
        Blockly.JavaScript.ORDER_NONE) || 'null';
    code += '  return ' + value + ';\n';
  } else {
    code += '  return;\n';
  }
  code += '}\n';
  return code;
};

/**
 * Code generator to add code into the setup() and loop() functions.
 * Its use is not mandatory, but necessary to add manual code to setup().
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.JavaScript['JavaScript_functions'] = function(block) {
  // Edited version of Blockly.Generator.prototype.statementToCode
  function statementToCodeNoTab(block, name) {
    var targetBlock = block.getInputTargetBlock(name);
    var code = Blockly.JavaScript.blockToCode(targetBlock);
    if (!goog.isString(code)) {
      throw 'Expecting code from statement block "' + targetBlock.type + '".';
    }
    return code;
  }

  var setupBranch = Blockly.JavaScript.statementToCode(block, 'SETUP_FUNC');
  //var setupCode = Blockly.JavaScript.scrub_(block, setupBranch); No comment block
  if (setupBranch) {
    Blockly.JavaScript.addSetup('userSetupCode', setupBranch, true);
  }

  var loopBranch = statementToCodeNoTab(block, 'LOOP_FUNC');
  //var loopcode = Blockly.JavaScript.scrub_(block, loopBranch); No comment block
  return loopBranch;
};

Blockly.JavaScript['procedures_task'] = function(block) {
  var text_task_name = block.getFieldValue('TASK_NAME')||'""';
  var value_ms = Blockly.JavaScript.valueToCode(block, 'MS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
  var func = 'async function '+text_task_name+'() {\n'+statements_do+'\n}\n';
  var setup = 'taskTimer.every('+value_ms+', '+text_task_name+');'
  var variable = 'int task_flag = 0';
  var code = '  taskTimer_update {\n    if('+text_task_name+'_flag) {\n      '+text_task_name+'_flag=0;\n      '+text_task_name+'();\n    }  \n}\n'
  //生成函数块
  Blockly.JavaScript.userFunctions_[text_task_name] = func;
  //生成setup初始化代码
   Blockly.JavaScript.addSetup('userSetupCode',
      setup, true);
  
  return code;
};
