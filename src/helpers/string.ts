/*
 * Returns a json that can be printed into html
 * 
 * @param {any} value - Value that will be converted to json
 */
export function dd (value : any) {
	return `<pre>${JSON.stringify(value)}</pre>`;
}

/*
 * Format the timestamp to a readable state
 */
export function timestamp (value? : Date, stamptime : boolean = false) : string {
	//Save the now date
	if (!value) value = new Date();

	const date = `${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}`;
	const time = stamptime && `${value.getHours()}:${value.getMinutes()}`;

	return date + (time ? ` ${time}`:"");
}