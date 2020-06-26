// Packages
import format from 'https://deno.land/x/color/index.ts';

// Helpers
import { timestamp }	from "../../../helpers/string.ts";

// Interfaces
import iTransaction from "../../../interfaces/iTransaction.ts";
import iExtension 	from "../../../interfaces/iExtension.ts";

// Enums
import TransactionType from "../../../enums/TransactionType.ts";

/*
 * Logger is responsible for saving txt files that register every event occurred
 * within catbot
 *
 */

 export default class Screenie implements iExtension {

    //-------------------------------------------------
    // Properties
	//-------------------------------------------------

	// Monetary values
	private static _balance : number = 0;
	private static _value	: number = 0;

	//Feedback values
	private static _lastMessage : string = "";

    //-------------------------------------------------
    // Event methods
	//-------------------------------------------------

	public static onBuy (value : number) {
		Screenie.transaction({
			type	: TransactionType.Purchase,
			value	: value,
			date	: new Date,
			coin	: {
				name		: "bitcoin",
				initials	: "btc",
			},
		});
	}

	public static onSell (value : number) {
		Screenie.transaction({
			type	: TransactionType.Sale,
			value	: value,
			date	: new Date,
			coin	: {
				name		: "bitcoin",
				initials	: "btc",
			},
		});
	}

	public static onUpdateValue (value : number) {
		Screenie.value(value);
	}

	public static onUpdateBalance (value : number) {
		Screenie.balance(value);
	}

	public static onGeneric (value : string) {
		Screenie.generic(value);
	}

    //-------------------------------------------------
    // Main methods
	//-------------------------------------------------

	public static transaction (transaction : iTransaction) {
		const action 	= transaction.type === TransactionType.Purchase ? "purchased":"sold";
		const value 	= "R$ " + transaction.value.toFixed(2);

		Screenie.print(`${action} ${value}`, timestamp(transaction.date, true));
	}

	public static balance (value : number) {
		Screenie._balance = value;
		Screenie.print(Screenie._lastMessage);
	}

	public static value (value : number) {
		Screenie._value = value;
		Screenie.print(Screenie._lastMessage);
	}

	public static generic (message : string) {
		Screenie.print(message);
	}

	public static clear () {
		console.log("\x1B[2J\x1B[1;1H");
	}

	public static print (value : string, stamp? : string) {
		Screenie.clear();
		// Header
		console.log(format.bgBlue.text(" CATbot ") + format.reset.text("") + format.blue.text(" made by Rafael Corrêa") + format.reset.text(""));
		
		// Monetary values
		console.log("Your current balance is: \tR$ " + Screenie._balance.toFixed(2));
		console.log("Coin current value is: \t\tR$ " + Screenie._value.toFixed(2));

		// Message
		console.log("");
		console.log(format.bgGreen.text(` ${stamp ? stamp : timestamp()} `) + format.reset.text("") + " " + value);

		// Set as last message
		Screenie._lastMessage = value;
	}
}