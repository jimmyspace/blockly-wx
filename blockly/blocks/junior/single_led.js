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

goog.provide('Blockly.Blocks.single_led');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.single_led.HUE = 100;

Blockly.Blocks['single_led_set_flag'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("设置单色LED")
        .appendField(new Blockly.FieldDropdown([["点亮", "ON"], ["熄灭", "OFF"]]), "FLAG");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.single_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['single_led_get_flag'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("当单色LED")
        .appendField(new Blockly.FieldDropdown([["点亮", "FLAG_ON"], ["熄灭", "FLAG_OFF"]]), "FLAG")
        .appendField("时");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.single_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  /** Assigns a type to the block, prompt always returns a string. */
    getBlockType: function() {
      return Blockly.Types.BOOLEAN;
    }
};


