export const MESSAGES = {
  ready: (username: string) => `${username} ready`,
} as const;

export const ERROR_MESSAGES = {
  'no-discord-bot-token': 'No discord bot token provided',
  'unknown-event': (eventName: string) => `Unknown event: ${eventName}`,
} as const;
