// Packages
import { config } 	from "https://deno.land/x/dotenv/mod.ts";

//Interfaces
import { iConfig } from "../src/classes/bot/interfaces.ts";

//Config
import strategy from "../src/classes/strategy/basic/index.ts";
import source 	from "../src/classes/source/binance/index.ts";

/*
 * Overwrite to the bot
 */
export default {
	strategy	: strategy,
	source 		: source,
	refresh		: +config().BOT_REFRESH,
	extensions 	: [
		
	]
} as iConfig;