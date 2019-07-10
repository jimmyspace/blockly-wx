'use strict';

goog.provide('Blockly.Arduino.other');

goog.require('Blockly.Arduino');

Blockly.Arduino['other_arduino_setup'] = function(block) {
	// If/elseif/else condition.
	var branchCode;
	branchCode = Blockly.Arduino.statementToCode(block, 'DO');
	Blockly.Arduino.addSetup('userSetupCode', branchCode, true);
	return '';
};

Blockly.Arduino['other_arduino_loop'] = function(block) {
	// If/elseif/else condition.
	var branchCode;
	branchCode = Blockly.Arduino.statementToCode(block, 'DO');
	return branchCode;
};