var vscode = require('vscode');

global.STATUS_TIMEOUT = 3000;

function activate(context) {
	var sayHello = vscode.commands.registerCommand("extension.sayHello", () => {
		window.showInformationMessage("Hello, World!");
	});

	context.subscriptions.push(sayHello);
}