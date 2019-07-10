'use strict';

goog.provide('Blockly.JavaScript.other');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['other_arduino_setup'] = function(block) {
	// If/elseif/else condition.
	var branchCode;
	branchCode = Blockly.JavaScript.statementToCode(block, 'DO');
	Blockly.JavaScript.addSetup('userSetupCode', branchCode, true);
	return '';
};

Blockly.JavaScript['other_arduino_loop'] = function(block) {
	// If/elseif/else condition.
	var branchCode;
	branchCode = Blockly.JavaScript.statementToCode(block, 'DO');
	return branchCode;
};