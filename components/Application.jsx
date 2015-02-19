import React from 'react';
import BookList from './BookList';

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

export default class Application extends React.Component {
	render() {
		return <div style={styles.container}>
			<header style={styles.header}>
				<h1>New York Times Best Seller Lists</h1>
			</header>

			<main style={styles.main}>
				<BookList />
			</main>
		</div>;
	}
}