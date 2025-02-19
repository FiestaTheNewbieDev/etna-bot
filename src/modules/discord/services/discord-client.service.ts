import { ERROR_MESSAGES } from '@discord/constants/messages';
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client } from 'discord.js';

@Injectable()
export class DiscordClientService implements OnModuleInit {
  public readonly client: Client;
  private logger = new Logger(DiscordClientService.name);

  constructor(private readonly configService: ConfigService) {
    this.client = new Client({
      intents: [],
    });
  }

  async onModuleInit() {
    this.logger.log('Module initialization...');

    const token = this.configService.get<string>('DISCORD_BOT_TOKEN');

    if (!token) {
      this.logger.fatal(ERROR_MESSAGES['no-discord-bot-token']);
      throw new Error(ERROR_MESSAGES['no-discord-bot-token']);
    }

    await this.client.login(token);
  }
}
