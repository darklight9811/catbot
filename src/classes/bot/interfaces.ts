// Interfaces
import iSource 		from "../../interfaces/iSource.ts";
import iStrategy 	from "../strategy/interface.ts";
import iExtension 	from "../../interfaces/iExtension.ts";

export interface iConfig {
	source		: iSource,
	strategy	: iStrategy,
	refresh		: number,
	extensions	: iExtension[],
	credentials	: {
		key		: string,
		secret	: string,
	}
}