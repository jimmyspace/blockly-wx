/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview JavaScript code generator for the text blocks.
 *     Partially implements the JavaScript Serial interface as described in:
 *     http://JavaScript.cc/en/Reference/Serial
 *
 * TODO: Too many calls to String constructor, which consumes a lot of uC
 *     resources. This will need revisiting for better type recognition.
 *
 * TODO: Trim generator is not correct.
 */
'use strict';

goog.provide('Blockly.JavaScript.muti_led');

goog.require('Blockly.JavaScript');


//自定义部分
//测试灯
Blockly.JavaScript['test_led_set_flag'] = function(block) {
  var led_flag = block.getFieldValue('LED_FLAG');
  var code = '';
  if(led_flag == 'LED_ON'){
    code += 'digitalWrite(LED_BUILTIN, HIGH);\n';
  }else{
    code += 'digitalWrite(LED_BUILTIN, LOW);\n';
  }
  Blockly.JavaScript.addSetup('LED_BUILTIN',
      'pinMode(LED_BUILTIN, OUTPUT);', true);
  return code;
};

//LED设置某个灯打开/熄灭（根据编号）
Blockly.JavaScript['muti_led_set_flag_with_no'] = function(block) {
  var led_no = Blockly.JavaScript.valueToCode(block, 'LED_NO',
        Blockly.JavaScript.ORDER_UNARY_POSTFIX) || '0';
  var flag = block.getFieldValue('FLAG');
  var code = 'await ccb.muti_led_set_flag_with_no('+led_no+',"'+flag+'");\n';
  return code;
};

//LED设置某个灯打开
Blockly.JavaScript['muti_led_set_on_with_xy'] = function(block) {
  var led_x = Blockly.JavaScript.valueToCode(block, 'LED_X',
        Blockly.JavaScript.ORDER_UNARY_POSTFIX) || '0';
  var led_y = Blockly.JavaScript.valueToCode(block, 'LED_Y',
        Blockly.JavaScript.ORDER_UNARY_POSTFIX) || '0';
  var code = 'await ccb.muti_led_set_on_with_xy('+led_x+','+led_y+');\n';
  return code;
};

//LED设置某个灯熄灭
Blockly.JavaScript['muti_led_set_off_with_xy'] = function(block) {
  var led_x = Blockly.JavaScript.valueToCode(block, 'LED_X',
        Blockly.JavaScript.ORDER_UNARY_POSTFIX) || '0';
  var led_y = Blockly.JavaScript.valueToCode(block, 'LED_Y',
        Blockly.JavaScript.ORDER_UNARY_POSTFIX) || '0';
  var code = 'await ccb.muti_led_set_off_with_xy('+led_x+','+led_y+');\n';
  return code;
};

//LED获取某个灯状态
Blockly.JavaScript['muti_led_get_flag_with_xy'] = function(block) {
  var led_x = Blockly.JavaScript.valueToCode(block, 'LED_X',
        Blockly.JavaScript.ORDER_UNARY_POSTFIX) || '0';
  var led_y = Blockly.JavaScript.valueToCode(block, 'LED_Y',
        Blockly.JavaScript.ORDER_UNARY_POSTFIX) || '0';
  var code = 'await ccb.muti_led_get_flag_with_xy('+led_x+','+led_y+')';
  return [code,Blockly.JavaScript.ORDER_UNARY_POSTFIX];
};

//LED显示自定义图标
Blockly.JavaScript['muti_led_show_with_but'] = function(block) {
  var str = '';
  for(var i=1;i<=49;i++){
    var led_colour = block.getFieldValue('LED'+i);
    if(led_colour == '#ffffff'){
        str += '#';
    }else{
        str += '.';
    }
  }
  var code = 'await ccb.muti_led_show_with_but("'+str+'");\n'
  return code;
};

//LED显示字符串
Blockly.JavaScript['muti_led_show_with_str'] = function(block) {
  var str = Blockly.JavaScript.valueToCode(block, 'STR',
        Blockly.JavaScript.ORDER_UNARY_POSTFIX) || '""';
  var code = 'await ccb.muti_led_show_with_str('+str+');\n';
  return code;
};

//LED显示预定义图标0
Blockly.JavaScript['muti_led_show_with_icon0'] = function(block) {
  return 'await ccb.muti_led_show_with_icon("Txu");\n'
};

//LED显示预定义图标1
Blockly.JavaScript['muti_led_show_with_icon1'] = function(block) {
  return 'await ccb.muti_led_show_with_icon("aixin");\n'
};

//LED显示预定义图标2
Blockly.JavaScript['muti_led_show_with_icon2'] = function(block) {
  return 'await ccb.muti_led_show_with_icon("duigou");\n'
};

//LED显示预定义图标3
Blockly.JavaScript['muti_led_show_with_icon3'] = function(block) {
  return 'await ccb.muti_led_show_with_icon("jianzi");\n'
};

//LED显示预定义图标4
Blockly.JavaScript['muti_led_show_with_icon4'] = function(block) {
  return 'await ccb.muti_led_show_with_icon("liubingxie");\n'
};

//LED显示预定义图标5
Blockly.JavaScript['muti_led_show_with_icon5'] = function(block) {
  return 'await ccb.muti_led_show_with_icon("nanguo");\n'
};

//LED显示预定义图标6
Blockly.JavaScript['muti_led_show_with_icon6'] = function(block) {
  return 'await ccb.muti_led_show_with_icon("xiaoaixin");\n'
};

//LED显示预定义图标7
Blockly.JavaScript['muti_led_show_with_icon7'] = function(block) {
  return 'await ccb.muti_led_show_with_icon("xiaozhengfangxing");\n'
};

//LED显示预定义图标8
Blockly.JavaScript['muti_led_show_with_icon8'] = function(block) {
  return 'await ccb.muti_led_show_with_icon("xiaolian");\n'
};

//LED显示预定义图标9
Blockly.JavaScript['muti_led_show_with_icon9'] = function(block) {
  return 'await ccb.muti_led_show_with_icon("zhengfangxing");\n'
};

//LED显示预定义图标10
Blockly.JavaScript['muti_led_show_with_icon10'] = function(block) {
  return 'await ccb.muti_led_show_with_icon("zuosanjiao");\n'
};

//LED显示预定义图标11
Blockly.JavaScript['muti_led_show_with_icon11'] = function(block) {
  return 'await ccb.muti_led_show_with_icon("xiaosanjiao");\n'
};


