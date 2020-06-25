// Enums
import TransactionType from "../enums/TransactionType.ts";

export default interface iTransaction {
	type 	: TransactionType,
	value 	: number,
	date	: Date,
}