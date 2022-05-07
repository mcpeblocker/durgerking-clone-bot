import { config } from "dotenv";
config();

import bot from "./core/bot";
import { isProduction } from "./utils/config";
import { handleErrors } from "./utils/errors";
import logger from "./utils/logger";
import { hydrateReply } from "@grammyjs/parse-mode";

// don't exit the process in production - useful for debugging
if (isProduction) handleErrors();

// middlewares
bot.use(hydrateReply);

// bot commands
import './commands';

bot.on(":web_app_data", (ctx) => {
    console.log(ctx.message?.web_app_data);
});

// start the bot
bot.start({
  onStart: (me) => {
    logger.info(`@${me.username} started!`);
  },
});
