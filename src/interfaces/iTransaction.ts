// Enums
import TransactionType from "../enums/TransactionType.ts";

// Interfaces
import iCoin from "./iCoin.ts";

export default interface iTransaction {
	type 	: TransactionType,
	value 	: number,
	date	: Date,
	coin	: iCoin
}