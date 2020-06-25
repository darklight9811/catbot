// Packages
import format from 'https://deno.land/x/color/index.ts';

// Helpers
import { timestamp }	from "../../../helpers/string.ts";

/*
 * Logger is responsible for saving txt files that register every event occurred
 * within catbot
 *
 */

 export default class Screenie {

	// Monetary values
	private static _balance : number = 0;
	private static _value	: number = 0;

	//Feedback values
	private static _lastMessage : string = "";

	/*
	 * Shows a transaction
	 */
	public static transaction () {

		const message = "yay";

		Screenie.print(message);
	}

	/*
	 * Shows your purse balance
	 */
	public static balance (value : number) {
		Screenie._balance = value;
		Screenie.print(Screenie._lastMessage);
	}

	/*
	 * Shows the current coin value
	 */
	public static value (value : number) {
		Screenie._value = value;
		Screenie.print(Screenie._lastMessage);
	}

	/*
	 * Display a generic message
	 */
	public static generic (message : string) {
		Screenie.print(message);
	}

	/*
	 * Clear the terminal
	 */
	public static clear () {
		console.log("\x1B[2J\x1B[1;1H");
	}

	/*
	 * Clear the terminal
	 */
	public static print (value : string) {
		Screenie.clear();
		// Header
		console.log(format.bgBlue.text(" CATbot ") + format.reset.text("") + format.blue.text(" made by Rafael Corrêa") + format.reset.text(""));
		
		// Monetary values
		console.log("Your current balance is: \tR$ " + Screenie._balance.toFixed(2));
		console.log("Bitcoin current value is: \tR$ " + Screenie._value.toFixed(2));

		// Message
		console.log("");
		console.log(format.bgGreen.text(timestamp()) + format.reset.text("") + " " + value);

		// Set as last message
		Screenie._lastMessage = value;
	}
}