//Interfaces
import iSource from "../../../interfaces/iSource.ts";

export default class BinanceSource implements iSource {
	public getWalletValue () : number {

		return 0;
	}

	public getCoinValue () : number {

		return 0;
	}

	public setCredentials (credentials : Object) : void {

	}

	public login () : boolean {

		// Everything occurred ok
		return false;
	}

	public isLogged () : boolean {

		// Everything occurred ok
		return false;
	}
	
	public buy (value : number) : boolean {
		
		// Everything occurred ok
		return true;
	}

	public sell (value : number) : boolean {

		// Everything occurred ok
		return true;
	}
}