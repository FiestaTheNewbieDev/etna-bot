import { DiscordClientService } from '@discord/services/discord-client.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DiscordEventsService {
  constructor(private readonly discordClientService: DiscordClientService) {}
}
