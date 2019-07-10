/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the text blocks.
 *     Partially implements the Arduino Serial interface as described in:
 *     http://arduino.cc/en/Reference/Serial
 *
 * TODO: Too many calls to String constructor, which consumes a lot of uC
 *     resources. This will need revisiting for better type recognition.
 *
 * TODO: Trim generator is not correct.
 */
'use strict';

goog.provide('Blockly.Arduino.muti_led');

goog.require('Blockly.Arduino');


//自定义部分

//测试灯
Blockly.Arduino['test_led_set_flag'] = function(block) {
  var led_flag = block.getFieldValue('LED_FLAG');
  var code = '';
  if(led_flag == 'LED_ON'){
    code += 'digitalWrite(LED_BUILTIN, HIGH);\n';
  }else{
    code += 'digitalWrite(LED_BUILTIN, LOW);\n';
  }
  Blockly.Arduino.addSetup('LED_BUILTIN',
      'pinMode(LED_BUILTIN, OUTPUT);', true);
  return code;
};


//LED设置某个灯打开/熄灭（根据编号）
Blockly.Arduino['muti_led_set_flag_with_no'] = function(block) {
  var led_no = Blockly.Arduino.valueToCode(block, 'LED_NO',
        Blockly.Arduino.ORDER_NONE) || '0';
  var flag = block.getFieldValue('FLAG');
  var code = 'muti_led_set_flag_with_no('+led_no+','+flag+');\n';
  Blockly.Arduino.muti_led.init();
  return code;
};

//LED设置某个灯打开
Blockly.Arduino['muti_led_set_on_with_xy'] = function(block) {
  var led_x = Blockly.Arduino.valueToCode(block, 'LED_X',
        Blockly.Arduino.ORDER_NONE) || '0';
  var led_y = Blockly.Arduino.valueToCode(block, 'LED_Y',
        Blockly.Arduino.ORDER_NONE) || '0';
  var code = 'muti_led_set_on_with_xy('+led_x+','+led_y+');\n';
  Blockly.Arduino.muti_led.init();
  return code;
};

//LED设置某个灯熄灭
Blockly.Arduino['muti_led_set_off_with_xy'] = function(block) {
  var led_x = Blockly.Arduino.valueToCode(block, 'LED_X',
        Blockly.Arduino.ORDER_NONE) || '0';
  var led_y = Blockly.Arduino.valueToCode(block, 'LED_Y',
        Blockly.Arduino.ORDER_NONE) || '0';
  var code = 'muti_led_set_off_with_xy('+led_x+','+led_y+');\n';
  Blockly.Arduino.muti_led.init();
  return code;
};

//LED获取某个灯状态
Blockly.Arduino['muti_led_get_flag_with_xy'] = function(block) {
  var led_x = Blockly.Arduino.valueToCode(block, 'LED_X',
        Blockly.Arduino.ORDER_NONE) || '0';
  var led_y = Blockly.Arduino.valueToCode(block, 'LED_Y',
        Blockly.Arduino.ORDER_NONE) || '0';
  var code = 'muti_led_get_flag_with_xy('+led_x+','+led_y+')';
  Blockly.Arduino.muti_led.init();
  return [code,Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

//LED显示自定义图标
Blockly.Arduino['muti_led_show_with_but'] = function(block) {
  var str = '';
  for(var i=1;i<=49;i++){
    var led_colour = block.getFieldValue('LED'+i);
    if(led_colour == '#ffffff'){
        str += '#';
    }else{
        str += '.';
    }
  }
  var code = 'muti_led_show_with_but("'+str+'");\n'
  Blockly.Arduino.muti_led.init();
  return code;
};

//LED显示字符串
Blockly.Arduino['muti_led_show_with_str'] = function(block) {
  var str = Blockly.Arduino.valueToCode(block, 'STR',
        Blockly.Arduino.ORDER_NONE) || '""';
  var code = 'muti_led_show_with_str('+str+');\n';
  Blockly.Arduino.muti_led.init();
  return code;
};

//LED显示预定义图标0
Blockly.Arduino['muti_led_show_with_icon0'] = function(block) {
  Blockly.Arduino.muti_led.init();
  return 'muti_led_show_with_icon(Txu);\n'
};

//LED显示预定义图标1
Blockly.Arduino['muti_led_show_with_icon1'] = function(block) {
  Blockly.Arduino.muti_led.init();
  return 'muti_led_show_with_icon(aixin);\n'
};

//LED显示预定义图标2
Blockly.Arduino['muti_led_show_with_icon2'] = function(block) {
  Blockly.Arduino.muti_led.init();
  return 'muti_led_show_with_icon(duigou);\n'
};

//LED显示预定义图标3
Blockly.Arduino['muti_led_show_with_icon3'] = function(block) {
  Blockly.Arduino.muti_led.init();
  return 'muti_led_show_with_icon(jianzi);\n'
};

//LED显示预定义图标4
Blockly.Arduino['muti_led_show_with_icon4'] = function(block) {
  Blockly.Arduino.muti_led.init();
  return 'muti_led_show_with_icon(liubingxie);\n'
};

//LED显示预定义图标5
Blockly.Arduino['muti_led_show_with_icon5'] = function(block) {
  Blockly.Arduino.muti_led.init();
  return 'muti_led_show_with_icon(nanguo);\n'
};

//LED显示预定义图标6
Blockly.Arduino['muti_led_show_with_icon6'] = function(block) {
  Blockly.Arduino.muti_led.init();
  return 'muti_led_show_with_icon(xiaoaixin);\n'
};

//LED显示预定义图标7
Blockly.Arduino['muti_led_show_with_icon7'] = function(block) {
  Blockly.Arduino.muti_led.init();
  return 'muti_led_show_with_icon(xiaozhengfangxing);\n'
};

//LED显示预定义图标8
Blockly.Arduino['muti_led_show_with_icon8'] = function(block) {
  Blockly.Arduino.muti_led.init();
  return 'muti_led_show_with_icon(xiaolian);\n'
};

//LED显示预定义图标9
Blockly.Arduino['muti_led_show_with_icon9'] = function(block) {
  Blockly.Arduino.muti_led.init();
  return 'muti_led_show_with_icon(zhengfangxing);\n'
};

//LED显示预定义图标10
Blockly.Arduino['muti_led_show_with_icon10'] = function(block) {
  Blockly.Arduino.muti_led.init();
  return 'muti_led_show_with_icon(zuosanjiao);\n'
};

//LED显示预定义图标11
Blockly.Arduino['muti_led_show_with_icon11'] = function(block) {
  Blockly.Arduino.muti_led.init();
  return 'muti_led_show_with_icon(xiaosanjiao);\n'
};

Blockly.Arduino.muti_led.init = function(){
  Blockly.Arduino.addInclude('LED_MATRIX_HEAD',
      '#include <led_matrix_lib.h>', true);
  Blockly.Arduino.addSetup('LED_MATRIX_INIT',
      'led_matrix_init();', true);
}

