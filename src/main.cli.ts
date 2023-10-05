import CliApplication from "./app/cli";
import HelperCommand from "./helper.command";
import VersionCommand from "./version.command";

const myManager = new CliApplication();
myManager.registerCommands([new HelperCommand(), new VersionCommand()]);
myManager.processCommand(process.argv);
