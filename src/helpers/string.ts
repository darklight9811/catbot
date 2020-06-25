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
export function timestamp (value? : Date) : string {
	//Save the now date
	if (!value) value = new Date();

	return `${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}`;
}