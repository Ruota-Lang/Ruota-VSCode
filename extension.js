const vscode = require("vscode");

function activate(context) {
	let ruota = {};
	let output = vscode.window.createTerminal("Ruota");

	ruota.path = vscode.extensions.getExtension("minin.ruota").extensionPath + "\\bin\\ruota.exe";
		ruota.path = ruota.path.replace(/\\/g, "\\\\");

	ruota.run = vscode.commands.registerCommand("ruota.run", function () {
		let code = vscode.window.activeTextEditor;

		if (code != undefined) {
			let path = code.document.fileName.split(".");
				path.pop();
				path = path.join(".");
				path = path.replace(/\\/g, "\\\\");

			output.show();
			output.sendText(`${ruota.path}" "${path}"`);
		}
	});

	context.subscriptions.push(ruota.run);
}

exports.activate = activate;