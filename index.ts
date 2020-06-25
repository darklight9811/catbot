// Packages
import { serve }	from "https://deno.land/std/http/server.ts";
import { config } 	from "https://deno.land/x/dotenv/mod.ts";

// Start bot
import "./src/boot/bot.ts";

// File tests
import Screenie from "./src/classes/extensions/screenie/index.ts";
Screenie.generic("yay message");