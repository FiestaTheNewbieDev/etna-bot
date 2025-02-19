import { MESSAGES, WARN_MESSAGES } from '@discord/constants/messages';
import AbstractEvent from '@discord/misc/AbstractEvent';
import { DiscordClientService } from '@discord/services/discord-client.service';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ReadyEvent extends AbstractEvent {
  private logger = new Logger(ReadyEvent.name);

  constructor(
    private readonly discordClientService: DiscordClientService,
    private readonly configService: ConfigService,
  ) {
    super('ready', true);
  }

  public execute() {
    const client = this.discordClientService.client;

    this.logger.log(MESSAGES.ready(client.user?.username || 'UNKNOWN'));

    const devGuildId = this.configService.get<string>('DEV_GUILD_ID');

    if (!devGuildId) {
      this.logger.warn(WARN_MESSAGES['no-dev-guild-id']);
      return;
    }

    // const devGuild = client.guilds.cache.get(devGuildId);
  }
}
