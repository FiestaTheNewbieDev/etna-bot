import { PingCommand } from '@discord/commands/ping';
import AbstractCommand from '@discord/misc/AbstractCommand';

interface ICommands {
  [key: string]: new (...args: any[]) => AbstractCommand;
}

const COMMANDS: ICommands = {
  ping: PingCommand,
} as const;

export default COMMANDS;
