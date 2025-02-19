import AbstractCommand from '@discord/misc/AbstractCommand';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PingCommand extends AbstractCommand {
  constructor() {
    super('ping', 'Always responds with "Pong!"');
  }

  public execute(): void {}
  public executeInteraction(): void {}
}
