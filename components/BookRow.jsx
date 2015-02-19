import React from 'react';

const styles = {
	wrapper: {
		display: 'flex',
		borderBottom: '1px solid #333',
	},
	position: {
		display: 'inline-block',
		color: '#555',
	},
	info: {
		padding: '4vh 4vh 4vh 0',
		flex: '4',
		display: 'flex',
		flexFlow: 'column',
		justifyContent: 'center',
	},
	cover: {
		flex: '1',
		padding: '4vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	coverImage: {
		maxWidth: '100%',
		maxHeight: '30vh',
	},
	title: {
		fontSize: '4vh',
		marginBottom: '2vh',
		lineHeight: '1.5em',
	},
	author: {
		fontSize: '3vh',
		color: '#555',
	},
	description: {
		fontSize: '2.5vh',
		color: '#aaa',
		lineHeight: '1.5em',
	},
	link: {
		display: 'inline-block',
		marginTop: '3vh',
		background: 'green',
		padding: '2vh',
		color: 'white',
		textDecoration: 'none',
		textTransform: 'uppercase',
		borderRadius: '1vh',
	}
};

export default class BookRow extends React.Component {
	render() {
		return <div style={styles.wrapper}>
			<div style={styles.cover}>
				<div>
					<img style={styles.coverImage} src={this.props.book.book_image} />
				</div>
			</div>
			<div style={styles.info}>
				<div style={styles.title}>
					<span style={styles.position}>{this.props.position}.</span>
					{' '}
					{this.props.book.title}
					{' '}
					<span style={styles.author}>{this.props.book.author}</span>
				</div>
				<div style={styles.description}>{this.props.book.description}</div>
				<div>
					<a style={styles.link} href={this.props.book.amazon_product_url}>
					Buy now
					</a>
				</div>
			</div>
		</div>;
	}
}