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

goog.provide('Blockly.Blocks.button');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.button.HUE = 20;

Blockly.Blocks['but_on_flag'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("当")
        .appendField(new Blockly.FieldDropdown([["A", "BUT_A"], ["B", "BUT_B"], ["C", "BUT_C"], ["D", "BUT_D"], ["E", "BUT_E"]]), "BUT")
        .appendField("号按键按下");
    this.setOutput(true, Blockly.Types.BOOLEAN.output);
    this.setColour(Blockly.Blocks.button.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  /** Assigns a type to the block, prompt always returns a string. */
    getBlockType: function() {
      return Blockly.Types.BOOLEAN;
  }
};

Blockly.Blocks['but_get_flag'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("当F")
        .appendField(new Blockly.FieldDropdown([["按下", "ON"], ["弹起", "OFF"]]), "BUT_FLAG")
        .appendField("时");
    this.setOutput(true, Blockly.Types.BOOLEAN.output);
    this.setColour(Blockly.Blocks.button.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  /** Assigns a type to the block, prompt always returns a string. */
    getBlockType: function() {
      return Blockly.Types.BOOLEAN;
  }
};


