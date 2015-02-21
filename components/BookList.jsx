import React from 'react';
import BookRow from './BookRow';

const styles = {
	listContainer: {
		color: '#eee',
		paddingTop: '12vh',
		display: 'flex',
		flexFlow: 'column',
	},
};

export default class BookList extends React.Component {
	render() {
		return (
			<div style={styles.listContainer}>
				{this.props.books.map((book, i) => <BookRow key={i} book={book} position={i+1} />)}
			</div>
		);
	}
}