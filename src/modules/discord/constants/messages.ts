export const MESSAGES = {
  ready: (username: string) => `${username} ready`,
} as const;

export const ERROR_MESSAGES = {
  'no-discord-bot-token': 'No discord bot token provided',
  'unknown-event': (eventName: string) => `Unknown event: ${eventName}`,
} as const;

export const WARN_MESSAGES = {
  'no-dev-guild-id': 'No dev guild id provided',
} as const;
