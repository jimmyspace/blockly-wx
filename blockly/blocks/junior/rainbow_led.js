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

goog.provide('Blockly.Blocks.rainbow_led');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.rainbow_led.HUE = 3;

Blockly.Blocks['rainbow_led_set_colour'] = {
   init: function() {
    this.appendDummyInput()
        .appendField("彩虹灯显示")
        .appendField(new Blockly.FieldColour("#ff0000").setColours(['#ff0000','#ff7f00','#ffff00','#00ff00','#00ffff','#0000ff','#8b00ff']).setColumns(1), "COLOUR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.rainbow_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['rainbow_led_set_colour_with_no'] = {
  init: function() {
    this.appendValueInput("LED_NO")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("彩虹灯设置");
    this.appendDummyInput()
        .appendField("灯，颜色")
        .appendField(new Blockly.FieldColour("#ff0000").setColours(['#ff0000','#ff7f00','#ffff00','#00ff00','#00ffff','#0000ff','#8b00ff']).setColumns(1), "COLOUR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.rainbow_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['rainbow_led_set_rgb_with_no'] = {
   init: function() {
    this.appendValueInput("LED_NO")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("彩虹灯设置");
    this.appendValueInput("COLOUR_R")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("灯，颜色值 R");
    this.appendValueInput("COLOUR_G")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("G");
    this.appendValueInput("COLOUR_B")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("B");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.rainbow_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


