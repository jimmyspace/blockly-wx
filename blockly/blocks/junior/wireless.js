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

goog.provide('Blockly.Blocks.wireless');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.wireless.HUE = 181;

Blockly.Blocks['wire_send_num'] = {
  init: function() {
    this.appendValueInput("NUM")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("无线发送数字");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.wireless.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['wire_send_str'] = {
  init: function() {
    this.appendValueInput("STR")
        .setCheck(Blockly.Types.TEXT.checkList)
        .appendField("无线发送字符串");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.wireless.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['wire_rec_num'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("无线接收到数字");
    this.setOutput(true, Blockly.Types.NUMBER.output)
    this.setColour(Blockly.Blocks.wireless.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  /** Assigns a type to the block, prompt always returns a int. */
    getBlockType: function() {
      return Blockly.Types.NUMBER;
    }
};

Blockly.Blocks['wire_rec_str'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("无线接收到字符串");
    this.setOutput(true, Blockly.Types.TEXT.output);
    this.setColour(Blockly.Blocks.wireless.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
   /** Assigns a type to the block, prompt always returns a string. */
    getBlockType: function() {
      return Blockly.Types.TEXT;
    }
};



