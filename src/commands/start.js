export async function startCommand(ctx) {
    const helpMessage = `
**Welcome**

To send a post to a channel, use the following command:
   \`/post @channel_id <message>\`
   
   Replace \`@channel_id\` with username of the channel.
   Replace \`<message>\` with the text you want to send.

   Example: \`/post @example_channel Hello everyone!\`

**Important**: The bot can only send messages to channels where you have admin rights.

**Note**: Make sure to invite the bot to your channel and make it an admin to enable posting.
`;

    await ctx.reply(helpMessage, {parse_mode: 'Markdown'});
}