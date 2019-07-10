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

goog.provide('Blockly.Blocks.fan');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.fan.HUE = 270;

Blockly.Blocks['fan_set_flag'] = {
 init: function() {
    this.appendDummyInput()
        .appendField("风扇")
        .appendField(new Blockly.FieldDropdown([["开", "ON"], ["关", "OFF"]]), "FLAG");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.fan.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['fan_set_speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("设置风扇转速")
        .appendField(new Blockly.FieldDropdown([["低", "SPEED_1"], ["高", "SPEED_3"]]), "SPEED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.fan.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


