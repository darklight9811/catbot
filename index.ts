// Packages
import { serve }	from "https://deno.land/std/http/server.ts";
import { config } 	from "https://deno.land/x/dotenv/mod.ts";

// Start bot
import "./src/boot/bot.ts";

// Variables
const port 		= +config().SERVER_PORT;
const host		= config().SERVER_HOST;
const server 	= serve({ port:port,hostname:host });

console.log(`starting server with port ${port}`);