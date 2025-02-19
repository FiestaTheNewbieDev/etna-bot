import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client } from 'discord.js';

@Injectable()
export class DiscordClientService implements OnModuleInit {
  private client: Client;
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
      throw new Error('No discord bot token provided');
    }

    await this.client.login(token);
  }

  public getClient(): Client {
    return this.client;
  }
}
