'use strict';

goog.provide('Blockly.Blocks.other');  // Deprecated

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks.other.HUE = 210;
Blockly.Blocks['other_arduino_setup'] = {
  /**
   * Block for basic arithmetic operator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      /*"message0": Blockly.Msg.OTHER_ARDUINO_SETUP_TITLE,*/
      "message0": "当开机时 %1 %2",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "DO"
        }
      ], 
      "colour": Blockly.Blocks.other.HUE,
      "tooltip": "",
      "helpUrl": "http://www.example.com/"
    });
  }
};

Blockly.Blocks['other_arduino_loop'] = {
  /**
   * Block for basic arithmetic operator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      /*"message0": Blockly.Msg.OTHER_ARDUINO_LOOP_TITLE,*/
      "message0": "无限循环 %1 %2",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "DO"
        }
      ], 
      "colour": Blockly.Blocks.other.HUE,
      "tooltip": "",
      "helpUrl": "http://www.example.com/"
    });
  }
};


