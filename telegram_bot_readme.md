
# Telegram Bot for Channel Posts


This bot allows you to send messages to Telegram channels where you have admin rights.

## Run bot
To run the bot, follow these steps:
```bash
git clone && cd tpost_bot && npm i
```

Then, enter the bot token. After that, you can run the bot using: ``node main.js``

## How to Use

To send a post to a channel, use the following command:

```
/post @channel_id <message>
```

- Replace `@channel_id` with the username of the channel.
- Replace `<message>` with the content you want to send.

### Example:

```
/post @example_channel Hello everyone!
```

## Important

- The bot can only send messages to channels where you are an admin.
- Make sure to invite the bot to your channel and make it an admin to enable posting.

---

