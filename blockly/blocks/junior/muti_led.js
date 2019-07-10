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

goog.provide('Blockly.Blocks.muti_led');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.muti_led.HUE = 244;

//test block
Blockly.Blocks['test_led_set_flag'] = {
  /**
   * Block for writing an angle value into a servo pin.
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField("设置测试灯")
        .appendField(new Blockly.FieldDropdown([["点亮", "LED_ON"], ["熄灭", "LED_OFF"]]), "LED_FLAG");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.muti_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'SERVO_PIN', 'digitalPins');
  }
};




Blockly.Blocks['muti_led_set_flag_with_no'] = {
  init: function() {
    this.appendValueInput("LED_NO")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("设置LED");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["点亮", "ON"], ["熄灭", "OFF"]]), "FLAG");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.muti_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['muti_led_set_on_with_xy'] = {
  init: function() {
    this.appendValueInput("LED_X")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("绘图 X");
    this.appendValueInput("LED_Y")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField(" Y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.muti_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['muti_led_set_off_with_xy'] = {
  init: function() {
    this.appendValueInput("LED_X")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("取消绘图 X");
    this.appendValueInput("LED_Y")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField(" Y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.muti_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['muti_led_get_flag_with_xy'] = {
  init: function() {
    this.appendValueInput("LED_X")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("当 X");
        this.appendValueInput("LED_Y")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField(" Y");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["点亮", "ON"], ["熄灭", "OFF"]]), "FLAG");
    this.setInputsInline(true);
    this.setOutput(true, Blockly.Types.BOOLEAN.output);
    this.setColour(Blockly.Blocks.muti_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  /** Assigns a type to the block, prompt always returns a string. */
    getBlockType: function() {
      return Blockly.Types.BOOLEAN;
    }
};


Blockly.Blocks['muti_led_show_with_but'] = {
  init: function() {

    this.appendDummyInput()
        .appendField("显示LED");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED1")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED2")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED3")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED4")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED5")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED6")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED7");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED8")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED9")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED10")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED11")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED12")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED13")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED14")
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED15")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED16")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED17")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED18")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED19")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED20")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED21");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED22")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED23")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED24")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED25")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED26")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED27")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED28");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED29")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED30")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED31")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED32")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED33")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED34")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED35");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED36")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED37")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED38")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED39")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED40")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED41")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED42");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED43")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED44")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED45")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED46")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED47")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED48")
        .appendField(new Blockly.FieldColour("#999999").setColours(['#ffffff','#999999']).setColumns(2), "LED49");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.muti_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['muti_led_show_with_str'] = {
  init: function() {
    this.appendValueInput("STR")
        .setCheck(Blockly.Types.TEXT.checkList)
        .appendField("显示字符串");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.muti_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['muti_led_show_with_icon0'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("显示图标")
        .appendField(new Blockly.FieldImage("img/icon_1.png", 70, 70, "ICON_1"));
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.muti_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['muti_led_show_with_icon0'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("显示图标")
        .appendField(new Blockly.FieldImage("img/icon_0.png", 70, 70, "icon_0"));
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.muti_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['muti_led_show_with_icon1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("显示图标")
        .appendField(new Blockly.FieldImage("img/icon_1.png", 70, 70, "icon_1"));
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.muti_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['muti_led_show_with_icon2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("显示图标")
        .appendField(new Blockly.FieldImage("img/icon_2.png", 70, 70, "icon_2"));
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.muti_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['muti_led_show_with_icon3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("显示图标")
        .appendField(new Blockly.FieldImage("img/icon_3.png", 70, 70, "icon_3"));
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.muti_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['muti_led_show_with_icon4'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("显示图标")
        .appendField(new Blockly.FieldImage("img/icon_4.png", 70, 70, "icon_4"));
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.muti_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['muti_led_show_with_icon5'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("显示图标")
        .appendField(new Blockly.FieldImage("img/icon_5.png", 70, 70, "icon_5"));
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.muti_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['muti_led_show_with_icon6'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("显示图标")
        .appendField(new Blockly.FieldImage("img/icon_6.png", 70, 70, "icon_6"));
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.muti_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['muti_led_show_with_icon7'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("显示图标")
        .appendField(new Blockly.FieldImage("img/icon_7.png", 70, 70, "icon_7"));
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.muti_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['muti_led_show_with_icon8'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("显示图标")
        .appendField(new Blockly.FieldImage("img/icon_8.png", 70, 70, "icon_8"));
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.muti_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['muti_led_show_with_icon9'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("显示图标")
        .appendField(new Blockly.FieldImage("img/icon_9.png", 70, 70, "icon_9"));
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.muti_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['muti_led_show_with_icon10'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("显示图标")
        .appendField(new Blockly.FieldImage("img/icon_10.png", 70, 70, "icon_10"));
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.muti_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['muti_led_show_with_icon11'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("显示图标")
        .appendField(new Blockly.FieldImage("img/icon_11.png", 70, 70, "icon_11"));
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.muti_led.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

