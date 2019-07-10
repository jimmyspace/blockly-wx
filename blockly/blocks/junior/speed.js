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

goog.provide('Blockly.Blocks.speed');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.speed.HUE = 100;

Blockly.Blocks['spped_get_acce'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("获取加速度")
        .appendField(new Blockly.FieldDropdown([["X", "ACCE_X"], ["Y", "ACCE_Y"], ["Z", "ACCE_Z"]]), "ACCE_DIRECTION")
        .appendField("值");
    this.setOutput(true, Blockly.Types.NUMBER.output);
    this.setColour(Blockly.Blocks.speed.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  /** Assigns a type to the block, prompt always returns a string. */
    getBlockType: function() {
      return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['speed_get_angu'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("获取角速度")
        .appendField(new Blockly.FieldDropdown([["wX", "ANGU_X"], ["wY", "ANGU_Y"], ["wZ", "ANGU_Z"]]), "ANGU_DIRECTION")
        .appendField("值");
    this.setOutput(true, Blockly.Types.NUMBER.output);
    this.setColour(Blockly.Blocks.speed.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  /** Assigns a type to the block, prompt always returns a string. */
    getBlockType: function() {
      return Blockly.Types.NUMBER;
  }
};


