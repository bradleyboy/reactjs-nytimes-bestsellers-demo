import StoreFactory from './Factory';
import { ActionTypes } from '../config/constants';

let _names = [];
let _selectedKey = 'combined-print-and-e-book-nonfiction';

const ListsStore = StoreFactory({
	getAll() {
		return _names;
	},

	getSelectedKey() {
		return _selectedKey;
	},

	listeners: {
		[ActionTypes.FETCH_LIST_NAMES](action) {
			_names = action.names;
			this.emitChange();
		},

		[ActionTypes.SELECT_LIST](action) {
			_selectedKey = action.key;
			this.emitChange();
		}
	}
});

export default ListsStore;