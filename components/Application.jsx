import React from 'react';
import BookList from './BookList';
import BookListHeader from './BookListHeader';
import ListsStore from '../stores/ListsStore';
import ListsActions from '../actions/ListsActions';
import BooksStore from '../stores/BooksStore';
import BooksActions from '../actions/BooksActions';

const styles = {
	container: {
		display: 'flex',
		flexFlow: 'column',
		height: '100%',
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		fontSize: '4vh',
		padding: '4vh',
		fontFamily: 'Bevan',
		background: 'rgba(255, 255, 255, 0.8)',
		position: 'fixed',
		width: '100%',
	},
	main: {
		flex: 1,
		overflowY: 'auto',
		paddingTop: '12vh',
	},
};

const getListState = () => {
	return {
		selectedKey: ListsStore.getSelectedKey(),
		names: ListsStore.getAll(),
	};
};

export default class Application extends React.Component {
	constructor() {
		this.state = {
			names: [],
			selectedKey: '',
			bookList: {
				books: [],
			}
		};

		this._onNamesChange = this._onNamesChange.bind(this);
		this._getBooks = this._getBooks.bind(this);
	}

	componentWillMount() {
		this.setState(getListState());
	}

	componentDidMount() {
		ListsStore.addChangeListener(this._onNamesChange);
		BooksStore.addChangeListener(this._getBooks);

		ListsActions.fetch();

		if (this.state.selectedKey) {
			BooksActions.fetch(this.state.selectedKey);
		}
	}

	componentWillUnmount() {
		ListsStore.removeChangeListener(this._onNamesChange);
		BooksStore.removeChangeListener(this._getBooks);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.selectedKey !== this.state.selectedKey) {
			BooksActions.fetch(this.state.selectedKey);
		}
	}

	_onNamesChange() {
		this.setState(getListState());
	}

	_getBooks() {
		this.setState({bookList: BooksStore.getAll()});
	}

	render() {
		return <div style={styles.container}>
			<header style={styles.header}>
				<h1>New York Times Best Seller Lists</h1>
			</header>

			{this.state.names.length ? <main style={styles.main}>
				<BookListHeader
					names={this.state.names}
					selectedKey={this.state.selectedKey}
					date={this.state.bookList.bestsellers_date} />
				<BookList books={this.state.bookList.books} />
			</main> : null}
		</div>;
	}
}