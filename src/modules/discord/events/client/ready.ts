import { MESSAGES } from '@discord/constants/messages';
import AbstractEvent from '@discord/misc/AbstractEvent';
import { Logger } from '@nestjs/common';
import { Client } from 'discord.js';

export default class ReadyEvent extends AbstractEvent {
  private logger = new Logger(ReadyEvent.name);

  constructor() {
    super('ready', true);
  }

  execute(client: Client) {
    this.logger.log(MESSAGES.ready(client.user?.username || 'UNKNOWN'));
  }
}
