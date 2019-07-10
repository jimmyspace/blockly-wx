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

goog.provide('Blockly.Blocks.buzzer');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.buzzer.HUE = 270;

Blockly.Blocks['buzzer_set_flag'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("蜂鸣器")
        .appendField(new Blockly.FieldDropdown([["开", "ON"], ["关", "OFF"]]), "BUZZER_FLAG");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.buzzer.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['buzzer_speak_with_ms'] = {
  init: function() {
    this.appendValueInput("MS")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("蜂鸣器响");
    this.appendDummyInput()
        .appendField("毫秒");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.buzzer.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['buzzer_speak_with_s'] = {
  init: function() {
    this.appendValueInput("S")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("蜂鸣器响");
    this.appendDummyInput()
        .appendField("秒");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.buzzer.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['buzzer_paly_music'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("播放音乐")
        .appendField(new Blockly.FieldDropdown([["音乐1", "MUSIC1"], ["音乐2", "MUSIC2"], ["音乐3", "MUSIC3"], ["音乐4", "MUSIC4"]]), "MUSIC");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.buzzer.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};



