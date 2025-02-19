type Messages = {
  [key: string]: string | ((...args: any[]) => string);
};

export const MESSAGES: Messages = {
  ready: (username: string) => `${username} ready`,
};

export const ERROR_MESSAGES: Messages = {
  'no-discord-bot-token': 'No discord bot token provided',
};
