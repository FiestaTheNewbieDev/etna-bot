import events from '@discord/events';
import { DiscordClientService } from '@discord/services/discord-client.service';
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class DiscordEventsService implements OnModuleInit {
  constructor(private readonly discordClientService: DiscordClientService) {}

  onModuleInit() {
    const client = this.discordClientService.client;

    for (const event of Object.values(events)) {
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
