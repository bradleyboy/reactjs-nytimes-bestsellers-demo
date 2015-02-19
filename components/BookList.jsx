import React from 'react';
import ListNamesStore from '../stores/ListNamesStore';
import ListNamesActions from '../actions/ListNamesActions';
import BooksStore from '../stores/BooksStore';
import BooksActions from '../actions/BooksActions';
import BookRow from './BookRow';
import moment from 'moment';

const styles = {
	container: {
		color: '#eee',
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		fontSize: '4vh',
		position: 'fixed',
		width: '100%',
		background: 'white',
		padding: '4vh',
		color: '#444',
	},
	listContainer: {
		paddingTop: '12vh',
		display: 'flex',
		flexFlow: 'column',
	},
	select: {
		fontSize: '4vh'
	},
};

export default class BookList extends React.Component {
	constructor() {
		this.state = {
			names: [],
			list: 'combined-print-and-e-book-nonfiction',
			bookList: {
				books: [],
			}
		};

		this._onNamesChange = this._onNamesChange.bind(this);
		this._changeList = this._changeList.bind(this);
		this._getBooks = this._getBooks.bind(this);
	}

	_onNamesChange() {
		this.setState({names: ListNamesStore.get().names});
	}

	_changeList(event) {
		let list = event.target.value;
		this.setState({list});

		BooksActions.fetch(list);

		this.refs.container.getDOMNode().parentNode.scrollTop = 0;
	}

	_getBooks() {
		this.setState({bookList: BooksStore.get().books});
	}

	componentDidMount() {
		ListNamesStore.addChangeListener(this._onNamesChange);
		BooksStore.addChangeListener(this._getBooks);
		ListNamesActions.fetch();

		if (this.state.list) {
			BooksActions.fetch(this.state.list);
		}
	}

	componentWillUnmount() {
		ListNamesStore.removeChangeListener(this._onNamesChange);
		BooksStore.removeChangeListener(this._getBooks);
	}

	render() {
		if (!this.state.bookList.bestsellers_date) return null;

		return (
			<div ref="container" style={styles.container}>
				<header style={styles.header}>
					<select style={styles.select} value={this.state.names.length ? this.state.list: null} onChange={this._changeList}>
						{this.state.names.map((name, i) => <option key={i} value={name.list_name_encoded}>{name.display_name}</option>)}
					</select>
					<time>
						{moment(this.state.bookList.bestsellers_date).format("MMMM Do, YYYY")}
					</time>
				</header>

				<div style={styles.listContainer}>
					{this.state.bookList.books.map((book, i) => <BookRow key={i} book={book} position={i+1} />)}
				</div>
			</div>
		);
	}
}