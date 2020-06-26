export default interface iSource {
	getWalletValue () 						: number,
	getCoinValue () 						: number,
	setCredentials (credentials : Object)	: void,
	login ()								: boolean,
	isLogged ()								: boolean,
	buy (value : number)					: boolean,
	sell (value : number)					: boolean,
}