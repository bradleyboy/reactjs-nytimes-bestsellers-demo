import StoreFactory from './Factory';
import { ActionTypes } from '../config/constants';

const ListNamesStore = StoreFactory({
	data: {
		names: [],
	},

	listeners: {
		[ActionTypes.FETCH_LIST_NAMES](action) {
			this.data.names = action.names;
			this.emitChange();
		}
	}
});

export default ListNamesStore;