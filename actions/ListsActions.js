import Dispatcher from '../dispatcher/Dispatcher';
import { ActionTypes } from '../config/constants';
import api from '../util/api';

export default {
	fetch() {
		api.getNames((err, data) => {
			Dispatcher.handleServerAction({
				type: ActionTypes.FETCH_LIST_NAMES,
				names: data.results,
			});
		});
	},

	select(key) {
		Dispatcher.handleViewAction({
			type: ActionTypes.SELECT_LIST,
			key,
		})
	},
}