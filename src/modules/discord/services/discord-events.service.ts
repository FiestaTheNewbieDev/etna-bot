import EVENTS from '@discord/constants/events';
import { ERROR_MESSAGES } from '@discord/constants/messages';
import AbstractEvent from '@discord/misc/AbstractEvent';
import { DiscordClientService } from '@discord/services/discord-client.service';
import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';

@Injectable()
export class DiscordEventsService implements OnModuleInit {
  private logger = new Logger(DiscordEventsService.name);

  constructor(
    private readonly discordClientService: DiscordClientService,
    @Inject('DISCORD_EVENTS')
    private readonly events: (new (...args: any[]) => AbstractEvent)[],
  ) {}

  onModuleInit() {
    const client = this.discordClientService.client;

    for (const Event of this.events) {
      const event = new Event();

      if (!EVENTS.includes(event.name)) {
        this.logger.error(ERROR_MESSAGES['unknown-event'](event.name));
        continue;
      }

      if (event.once)
        client.once(event.name, (...args: any[]) =>
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          event.execute(client, ...args),
        );
      else
        client.on(event.name, (...args: any[]) =>
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          event.execute(client, ...args),
        );
    }
  }
}
