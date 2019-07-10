/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Arduino Time functions.
 *     The arduino built in functions syntax can be found in
 *     http://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.Blocks.digitron');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.digitron.HUE = 20;


Blockly.Blocks['digitron_show_num'] = {
  /**
   * Block for writing an angle value into a servo pin.
   * @this Blockly.Block
   */
  init: function() {
    this.appendValueInput("NUM")
        .setCheck("Number")
        .appendField("数码管显示数字");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['digitron_show_with_no'] = {
  /**
   * Block for writing an angle value into a servo pin.
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField("数码管")
        .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"]]), "DIG");
    this.appendDummyInput()
        .appendField("，显示内容")
        .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"],["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"],["8", "8"], ["9", "9"], ["A", "DIGITRON_A"], ["B", "DIGITRON_B"],["C", "DIGITRON_C"], ["D", "DIGITRON_D"],["E", "DIGITRON_E"], ["F", "DIGITRON_F"]]), "VAL");
    //this.appendValueInput("VAL")
    //    .setCheck(Blockly.Types.TEXT.checkList)
    //    .appendField("，显示内容");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};