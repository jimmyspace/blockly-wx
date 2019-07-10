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

goog.provide('Blockly.Blocks.rgb_led');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.rgb_led.HUE = 319;

Blockly.Blocks['rgb_led_set_flag_and_colour'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("三色LED")
        .appendField(new Blockly.FieldDropdown([["开", "ON"], ["关", "OFF"]]), "FLAG")
        .appendField(new Blockly.FieldDropdown([["蓝", "BLUE"], ["绿", "GREEN"], ["红", "RED"]]), "COLOUR")
        .appendField("灯");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.rgb_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['rgb_led_get_flag_and_colour'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("三色LED当")
        .appendField(new Blockly.FieldDropdown([["蓝", "BLUE"], ["绿", "GREEN"], ["红", "RED"]]), "COLOUR")
        .appendField("灯")
        .appendField(new Blockly.FieldDropdown([["开", "ON"], ["关", "OFF"]]), "FLAG")
        .appendField("时");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.rgb_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  /** Assigns a type to the block, prompt always returns a string. */
    getBlockType: function() {
      return Blockly.Types.BOOLEAN;
    }
};


