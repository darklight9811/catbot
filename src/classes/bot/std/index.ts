//Interfaces
import { iConfig } 	from "../interfaces.ts";
import iStrategy	from "../../strategy/interface.ts";
import iSource		from "../../../interfaces/iSource.ts";
import iExtension 	from "../../../interfaces/iExtension.ts";

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
	extensions	: iExtension[];
	credentials : Object;
	stop		: boolean = false;

    //-------------------------------------------------
    // Core methods
    //-------------------------------------------------
	
	constructor (data? : iConfig) {
		this.refresh		= data?.refresh 	? data.refresh 		: 5;
		this.source 		= data?.source 		? data.source 		: new stdSource;
		this.strategy 		= data?.strategy 	? data.strategy 	: new stdStrategy;
		this.extensions		= data?.extensions	? data.extensions	: [];
		this.credentials	= data?.credentials ? data.credentials	: {};
	}

    //-------------------------------------------------
    // Main methods
	//-------------------------------------------------
	
	public run () {
		// Not logged
		if (!this.source.isLogged()) {
			this.source.setCredentials(this.credentials);

			// Try to force login
			if (!this.source.login()) {
				this.stop = true;
				
				// Tell extensions that the bot crashed
				for (let i = 0; i < this.extensions.length; i++) {
					const extension = this.extensions[i];

					if (extension.onGeneric) extension.onGeneric("The bot has paused because of missing credentials");
				}
			}
		}

		// Loop bot until it finds an error
		if (!this.stop) setTimeout(this.run, this.refresh * 60000);
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
		const coinValue = this.source.getCoinValue();

		// Tell extensions that we updated coin value
		for (let i = 0; i < this.extensions.length; i++) {
			const extension = this.extensions[i];

			if (extension.onUpdateValue) extension.onUpdateValue(coinValue);
		}
	}

	public getBalance () {
		const balanceValue = this.source.getWalletValue();

		// Tell extensions that we updated balance
		for (let i = 0; i < this.extensions.length; i++) {
			const extension = this.extensions[i];

			if (extension.onUpdateBalance) extension.onUpdateBalance(balanceValue);
		}
	}
}