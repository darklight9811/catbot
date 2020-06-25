// Packages
import { ensureDir } 	from "https://deno.land/std@0.54.0/fs/ensure_dir.ts";
import * as path 		from "https://deno.land/std/path/mod.ts";

// Helpers
import { timestamp }	from "../../../helpers/string.ts";

// Interfaces
import iTransaction from "../../../interfaces/iTransaction.ts";

// Enums
import TransactionType from "../../../enums/TransactionType.ts";

/*
 * Logger is responsible for saving txt files that register every event occurred
 * within catbot
 *
 */

 export default class Logger {

    //-------------------------------------------------
    // Event methods
	//-------------------------------------------------

	public static onBuy (value : number) {
		Logger.sell({
			type	: TransactionType.Sale,
			value	: value,
			date	: new Date,
		});
	}

	public static onSell (value : number) {
		Logger.sell({
			type	: TransactionType.Sale,
			value	: value,
			date	: new Date,
		});
	}

	public static onUpdateValue (value : number) {
		Logger.value(value);
	}

    //-------------------------------------------------
    // Main methods
	//-------------------------------------------------

	public static buy (transaction : iTransaction) {
		Logger.save(`purchases/${timestamp(transaction.date)}`, `${timestamp(transaction.date, true)} (date) - bought R$ ${transaction.value.toFixed(2)} bitcoins\n`);
	}

	public static sell (transaction : iTransaction) {
		Logger.save(`purchases/${timestamp(transaction.date)}`, `${timestamp(transaction.date, true)} (date) - sold R$ ${transaction.value.toFixed(2)} bitcoins\n`);
	}

	public static value (value : number) {
		Logger.save(`value/${timestamp()}`, `${timestamp(undefined, true)} (date) - bitcoin has R$ ${value.toFixed(2)} market value\n`);
	}

	public static general (text : string) {
		Logger.save(`general/${timestamp()}`, `${timestamp(undefined, true)} (date) - ${text}\n`);
	}

    //-------------------------------------------------
    // Helper methods
	//-------------------------------------------------

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