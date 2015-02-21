import StoreFactory from './Factory';
import { ActionTypes } from '../config/constants';

let _books = [];

const BooksStore = StoreFactory({
	getAll() {
		return _books;
	},

	listeners: {
		[ActionTypes.FETCH_LIST_BOOKS](action) {
			_books = action.books;
			this.emitChange();
		}
	}
});

export default BooksStore;