const vscode = require('vscode');

function activate(context) {
	var ruota = {};

	ruota.run = vscode.commands.registerCommand("ruota.run", function () {
		let output = vscode.window.createOutputChannel("Ruota");

		let code = vscode.window.activeTextEditor;

		if (code != undefined) {
			code = code.document.getText();

			output.appendLine(code);
		}
	});

	context.subscriptions.push(ruota.run);
}

exports.activate = activate;