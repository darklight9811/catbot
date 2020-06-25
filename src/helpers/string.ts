/*
 * Returns a json that can be printed into html
 * 
 * @param {any} value - Value that will be converted to json
 */
export function dd (value : any) {
	return `<pre>${JSON.stringify(value)}</pre>`;
}