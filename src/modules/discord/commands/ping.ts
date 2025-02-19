import { ERROR_MESSAGES } from '@discord/constants/messages';
import AbstractCommand from '@discord/misc/AbstractCommand';
import { Injectable, Logger } from '@nestjs/common';
import { CommandInteraction, Message, TextChannel } from 'discord.js';

@Injectable()
export class PingCommand extends AbstractCommand {
  private logger = new Logger(PingCommand.name);

  constructor() {
    super('ping', 'Always responds with "Pong!"');
  }

  public execute(message: Message) {
    if (message.channel instanceof TextChannel) {
      message.channel.sendTyping();
      message.channel.send('Pong!');
    } else this.logger.error(ERROR_MESSAGES['unsupported-channel-type']);
  }

  public executeInteraction(interaction: CommandInteraction): void {}
}
