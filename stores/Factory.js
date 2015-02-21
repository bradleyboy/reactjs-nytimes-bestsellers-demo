import EventEmitter from 'events';
import assign from 'object-assign';
import Dispatcher from '../dispatcher/Dispatcher';

const CHANGE_EVENT = 'change';

export default function (obj) {
	let Store = assign({}, EventEmitter.prototype, {
		emitChange() {
			this.emit(CHANGE_EVENT);
		},

		addChangeListener(callback) {
			this.on(CHANGE_EVENT, callback);
		},

		removeChangeListener(callback) {
			this.removeListener(CHANGE_EVENT, callback);
		}
	}, obj);

	Store.dispatchToken = Dispatcher.register((payload) => {
		if (Store.listeners[payload.action.type]) {
			Store.listeners[payload.action.type].call(Store, payload.action);
		}
	});

	return Store;
}
