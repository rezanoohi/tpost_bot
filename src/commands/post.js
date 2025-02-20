export async function sendPost(ctx, bot) {
    // Split the user command to extract channel ID and post text
    let inputArray = ctx.message.text.split(' ');
    // Remove the '/post' command
    inputArray.shift()
    // Get the channel ID from the command
    let channelID = inputArray[0]
    // Remove the channel ID from the input
    inputArray.shift()
    // Join remaining input as the text to be posted
    let postText = inputArray.join(' ');

    // Check if channel username is valid or not
    if (!channelID.match(/^@[A-Za-z0-9_]+$/) || channelID.length < 6) {
        await ctx.sendMessage(`Invalid telegram channel username ${channelID}`);
        return;
    }

    if (inputArray.length >= 1) { // Check if there is a valid command
        try {
            // Check if the user is an admin or creator of the channel
            const memberStatus = (await ctx.telegram.getChatMember(channelID, ctx.from.id)).status;

            if (["creator", "administrator",].includes(memberStatus)) {
                // If the user is an admin or creator, post the message
                await bot.telegram.sendMessage(channelID, postText);
            } else {
                // If the user is not an admin, notify them
                await ctx.reply(`You are not an admin of ${channelID}`);
            }
        } catch (error) {
            // Handle errors such as the channel not existing or being private
            console.error(error);
            await ctx.reply(`${channelID} does not exist or is private`);
        }
    } else {
        await ctx.sendMessage(`
Make sure you enter a valid request
Need help? /help
        `);
    }

}