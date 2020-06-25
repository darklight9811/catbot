// Packages
import { ensureDir } 	from "https://deno.land/std@0.54.0/fs/ensure_dir.ts";
import * as path 		from "https://deno.land/std/path/mod.ts";

// Helpers
import { timestamp }	from "../../../helpers/string.ts";

/*
 * Logger is responsible for saving txt files that register every event occurred
 * within catbot
 *
 */

 export default class Logger {

	/*
	 * Saves the buy operation
	 */
	public static buy () {
		const date = timestamp();

		Logger.save(`purchases/${date}`, `${date} (date) - bought two bitcoins\n`);
	}

	/*
	 * Saves the sell operation
	 */
	public static sell () {
		const date = timestamp();

		Logger.save(`sales/${date}`, `${date} (date) - sold two bitcoins\n`);
	}

	/*
	 * Saves the coin current value
	 */
	public static value () {
		const date = timestamp();

		Logger.save(`value/${date}`, `${date} (date) - bitcoin has $2.000 market value\n`);
	}

	/*
	 * Print a generic message
	 */
	public static general (text : string) {
		const date = timestamp();

		Logger.save(`general/${date}`, `${date} (date) - ${text}\n`);
	}

	/*
	 * Check if directory path exists, create file if it doesn't exist
	 * and append if already exists
	 */
	private static async save (pathToSave : string, stringToSave : string) {
		const encoder 	= new TextEncoder();
		const text 		= encoder.encode(stringToSave + "\n");
		const SavePath	= path.join("logs/" + pathToSave + ".log");

		//Make sure the path exists
		await ensureDir(path.parse(SavePath).dir);

		//Write to file
		const file = await Deno.open(SavePath, {write:true,create:true,append:true});
		await Deno.writeAll(file, text);
		file.close();
	}
}