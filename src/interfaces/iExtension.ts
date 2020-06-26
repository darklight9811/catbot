export default interface iExtension {
	onGeneric (text : string) 			: void,
	onBuy (value : number) 				: void,
	onSell (value : number) 			: void,
	onUpdateValue (value : number) 		: void,
	onUpdateBalance (value : number) 	: void,
}