import Dispatcher from '../dispatcher/Dispatcher';
import { ActionTypes } from '../config/constants';
import api from '../util/api';

export default {
	fetch(list) {
		api.getListBooks(list, (err, data) => {
			Dispatcher.handleServerAction({
				type: ActionTypes.FETCH_LIST_BOOKS,
				books: data.results,
			});
		});
	}
}