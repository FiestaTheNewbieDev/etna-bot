import ReadyEvent from '@discord/events/client/ready';
import AbstractEvent from '@discord/misc/AbstractEvent';

interface IEvents {
  [key: string]: new (...args: any[]) => AbstractEvent;
}

const events: IEvents = {
  ready: ReadyEvent,
};

export default events;
