"use strict";

const vscode_1 = require("vscode");

function activate() {
	vscode_1.commands.registerCommand('ruota.sayHello', () => {
		vscode_1.window.showInformationMessage('Hello World!');
	});
}

exports.activate = activate;