import { DiscordClientService } from '@discord/services/discord-client.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DiscordCommandsService {
  constructor(private readonly discordClientService: DiscordClientService) {}
}
