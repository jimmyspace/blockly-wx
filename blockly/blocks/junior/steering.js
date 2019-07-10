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

goog.provide('Blockly.Blocks.steering');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.steering.HUE = 228;

Blockly.Blocks['steering_turn_to'] = {
  init: function() {
    this.appendValueInput("ANGLE")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("舵机转动至");
    this.appendDummyInput()
        .appendField("度");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.steering.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['steering_get_angle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("获取舵机当前角度");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.steering.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  /** Assigns a type to the block, prompt always returns a int. */
    getBlockType: function() {
      return Blockly.Types.NUMBER;
    }
};

Blockly.Blocks['steering_turn_with_time'] = {
  init: function() {
    this.appendValueInput("TIME")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("在");
    this.appendValueInput("ANGLE")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("秒内转动");
    this.appendDummyInput()
        .appendField("度");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.steering.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


