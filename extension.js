const vscode = require('vscode');

function activate(context) {
	var ruota = {};
	var output = vscode.window.createTerminal("Ruota");

	ruota.path = vscode.extensions.getExtension("minin.ruota").extensionPath + "\\bin\\ruota.exe";

	ruota.run = vscode.commands.registerCommand("ruota.run", function () {
		let code = vscode.window.activeTextEditor;

		if (code != undefined) {
			let path = code.document.fileName.split(".");
			path = path[path.lenth-1];

			output.show();
			output.sendText(`${ruota.path} ${path}`)
		}
	});

	context.subscriptions.push(ruota.run);
}

exports.activate = activate;