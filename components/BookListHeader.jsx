import React from 'react';
import moment from 'moment';
import ListsActions from '../actions/ListsActions';

const styles = {
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
	select: {
		fontSize: '4vh'
	},
};

export default class BookListHeader extends React.Component {
	_changeList(e) {
		ListsActions.select(e.target.value);
	}

	render() {
		return (
			<header style={styles.header}>
				<select style={styles.select} value={this.props.selectedKey} onChange={this._changeList}>
					{this.props.names.map((name, i) => <option key={i} value={name.list_name_encoded}>{name.display_name}</option>)}
				</select>
				<time>
					{moment(this.props.list_date).format("MMMM Do, YYYY")}
				</time>
			</header>
		);
	}
}