import { InlineKeyboard } from "grammy";
import process from 'node:process';
import bot from "../core/bot";

const webAppUrl = process.env["WEB_APP_URL"];

if (!webAppUrl) throw new Error("WEB_APP_URL must be provided!");

bot.command('start', (ctx) => {
    let text = `<b>Let's get started 🍟</b>\n\nPlease tap the button below to order your perfect lunch!`;
    let keyboard = new InlineKeyboard().webApp("Order food", webAppUrl);

    ctx.replyWithHTML(text, {
        reply_markup: keyboard
    });
});