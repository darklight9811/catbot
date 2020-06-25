//Interfaces
import { iConfig } 	from "../interfaces.ts";
import iSource		from "../../source/interface.ts";
import iStrategy	from "../../strategy/interface.ts";

//Strategies
import stdStrategy 	from "../../strategy/basic/index.ts";
import stdSource	from "../../source/binance/index.ts";

/*
 * Catbot is responsible for getting data from the API
 *
 * @param {iConfig} data - default settings to use in the bot
 */
export default class CatBot {

    //-------------------------------------------------
    // Properties
	//-------------------------------------------------

	refresh		: number;
	source 		: iSource;
	strategy 	: iStrategy;
	extensions	: any[];

    //-------------------------------------------------
    // Core methods
    //-------------------------------------------------
	
	constructor (data? : iConfig) {
		this.refresh	= data?.refresh 	? data.refresh 		: 5;
		this.source 	= data?.source 		? data.source 		: stdSource;
		this.strategy 	= data?.strategy 	? data.strategy 	: stdStrategy;
		this.extensions	= data?.extensions	? data.extensions	: [];
	}

    //-------------------------------------------------
    // Main methods
	//-------------------------------------------------
	
	public run () {
		this.buy(10);

		setTimeout(this.run, this.refresh * 60000);
	}

	public buy (value : number) {

		// Tell extensions that we bought something
		for (let i = 0; i < this.extensions.length; i++) {
			const extension = this.extensions[i];

			if (extension.onBuy) extension.onBuy(value);
		}
	}

	public sell (value : number) {

		// Tell extensions that we sold something
		for (let i = 0; i < this.extensions.length; i++) {
			const extension = this.extensions[i];

			if (extension.onSell) extension.onSell(value);
		}
	}

	public getValue () {
		const coinValue = 0;

		// Tell extensions that we updated coin value
		for (let i = 0; i < this.extensions.length; i++) {
			const extension = this.extensions[i];

			if (extension.onUpdateValue) extension.onUpdateValue(coinValue);
		}
	}

	public getBalance () {
		const balanceValue = 0;

		// Tell extensions that we updated balance
		for (let i = 0; i < this.extensions.length; i++) {
			const extension = this.extensions[i];

			if (extension.onUpdateBalance) extension.onUpdateBalance(balanceValue);
		}
	}
}