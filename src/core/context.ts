import { ParseModeContext } from "@grammyjs/parse-mode";
import { Context } from "grammy"

export type BotContext = Context & ParseModeContext;