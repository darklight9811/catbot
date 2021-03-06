// Packages
import { config } 	from "https://deno.land/x/dotenv/mod.ts";

// Interfaces
import { iConfig } from "../src/classes/bot/interfaces.ts";

// Config
import strategy from "../src/classes/strategy/basic/index.ts";
import source 	from "../src/classes/source/binance/index.ts";

// Extensions
import Logger from "../src/classes/extensions/logger/index.ts";
import Screenie from "../src/classes/extensions/screenie/index.ts";

/*
 * Overwrite to the bot
 */
export default {
	strategy	: new strategy,
	source 		: new source,
	refresh		: +config().BOT_REFRESH,
	extensions 	: [
		Logger,
		Screenie
	],
	credentials	: {
		key		: config().BOT_TOKEN,
		secret	: config().BOT_SECRET,
	}
} as iConfig;