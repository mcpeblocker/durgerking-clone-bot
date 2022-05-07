import { Bot } from "grammy";
import process from "node:process";
import { BotContext } from "./context";

const token = process.env["TOKEN"];

if (!token) throw new Error("TOKEN is required as an environment variable!");

const bot = new Bot<BotContext>(token);

// gracefully stop
process.on('SIGTERM', () => bot.stop());
process.on('SIGINT', () => bot.stop());

export default bot;