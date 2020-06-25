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

    //-------------------------------------------------
    // Core methods
    //-------------------------------------------------
	
	constructor (data? : iConfig) {
		this.refresh	= data?.refresh 	? data.refresh 	: 5;
		this.source 	= data?.source 		? data.source 	: stdSource;
		this.strategy 	= data?.strategy 	? data.strategy : stdStrategy;
	}

    //-------------------------------------------------
    // Main methods
	//-------------------------------------------------
	
	public run () {

		setTimeout(this.run, this.refresh * 60000);
	}
}