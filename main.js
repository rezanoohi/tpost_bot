import {Telegraf} from "telegraf";
import 'dotenv/config'
import {sendPost} from "./src/commands/post.js";
import {startCommand} from "./src/commands/start.js";

const bot = new Telegraf(process.env.BOT_TOKEN); // Bot token

bot.command(['start', 'help'], async ctx => {
    await ctx.sendChatAction('typing')
    await startCommand(ctx)
})


bot.command('post', async ctx => {
    await ctx.sendChatAction('typing')
    await sendPost(ctx, bot)
})


await bot.launch()