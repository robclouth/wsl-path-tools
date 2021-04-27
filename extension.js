const vscode = require("vscode");
const execa = require("execa");
const isWsl = require("is-wsl");

async function getWSLPath(workspacePath) {
	const { stdout } = await execa(isWsl ? "wslpath" : "wsl wslpath", [workspacePath], {
		cleanup: true
	});

	return stdout;
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const disposable = vscode.commands.registerCommand("wsl-path-tools.workspaceFolder", async function () {
		if (vscode.workspace.workspaceFolders !== undefined) {
			const workspacePath = vscode.workspace.workspaceFolders[0].uri.path;
			if (process.platform !== "win32")
				return workspacePath

			const cleanedPath = workspacePath.replace(/\\/g, "\\\\").replace(/^[/]?[a-zA-Z]:/, "")
			const wslPath = await getWSLPath(cleanedPath)
			return wslPath;
		}
		else {
			vscode.window.showErrorMessage("No workspace found");
		}
	});

	context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
