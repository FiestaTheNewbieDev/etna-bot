import events from '@discord/events';
import { DiscordClientService } from '@discord/services/discord-client.service';
import { DiscordCommandsService } from '@discord/services/discord-commands.service';
import { DiscordEventsService } from '@discord/services/discord-events.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [
    DiscordClientService,
    DiscordEventsService,
    DiscordCommandsService,
    {
      provide: 'DISCORD_EVENTS',
      useValue: Object.values(events),
    },
  ],
})
export class DiscordModule {}
