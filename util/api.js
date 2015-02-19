import jsonp from 'jsonp';

const apiKey = NYT_API_KEY;
const baseUrl = 'http://api.nytimes.com/svc/books/v3/lists';

export default {
	getNames(callback) {
		jsonp(`${baseUrl}/names.jsonp?api-key=${apiKey}`, {}, callback);
	},

	getListBooks(list, callback) {
		jsonp(`${baseUrl}/${list}.jsonp?api-key=${apiKey}`, {}, callback);
	}
}