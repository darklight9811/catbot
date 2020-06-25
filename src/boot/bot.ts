//Classes
import CatBot from "../classes/bot/std/index.ts";

//Configuration
import config from "../../config/bot.ts";

//Initialize
const bot = new CatBot(config);
bot.run();

export default bot;