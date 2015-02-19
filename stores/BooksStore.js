import StoreFactory from './Factory';
import { ActionTypes } from '../config/constants';

const BooksStore = StoreFactory({
	data: {
		books: [],
	},

	listeners: {
		[ActionTypes.FETCH_LIST_BOOKS](action) {
			this.data.books = action.books;
			this.emitChange();
		}
	}
});

export default BooksStore;