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

goog.provide('Blockly.Blocks.humidity');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.humidity.HUE = 228;

Blockly.Blocks['humidity_get_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("获取湿度值");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.humidity.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  /** Assigns a type to the block, prompt always returns a string. */
    getBlockType: function() {
      return Blockly.Types.DECIMAL;
    }
};

