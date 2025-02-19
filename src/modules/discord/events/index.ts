import ReadyEvent from '@discord/events/client/ready';
import AbstractEvent from '@discord/misc/AbstractEvent';

interface IEvents {
  [key: string]: AbstractEvent;
}

const events: IEvents = {
  ready: new ReadyEvent(),
};

export default events;
