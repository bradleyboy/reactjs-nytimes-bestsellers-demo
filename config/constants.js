import keyMirror from 'keymirror';

export const ActionTypes = keyMirror({
	FETCH_LIST_NAMES: null,
	FETCH_LIST_BOOKS: null,
});

export const PayloadSources = keyMirror({
	SERVER_ACTION: null,
	VIEW_ACTION: null
});