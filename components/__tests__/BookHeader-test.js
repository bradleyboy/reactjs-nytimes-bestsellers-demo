/** @jsx React.DOM */

NYT_API_KEY='';
jest.autoMockOff();
jest.mock('../../actions/ListsActions.js');

describe('BookListHeader', function() {
	it('renders the header', function() {
		var React = require('react/addons');
		var BookListHeader = require('../BookListHeader.jsx');
		var ListsActions = require('../../actions/ListsActions.js');

		var TestUtils = React.addons.TestUtils;
		var names = [
			{
				list_name_encoded: 'one',
				display_name: 'One',
			},
			{
				list_name_encoded: 'two',
				display_name: 'Two',
			},
			{
				list_name_encoded: 'three',
				display_name: 'Three',
			}
		];

		var header = TestUtils.renderIntoDocument(
			<BookListHeader names={names} selectedKey="two" date="2015-01-01" />
		);

		var select = TestUtils.findRenderedDOMComponentWithTag(header, 'select');
		expect(select.getDOMNode().value).toEqual('two');

		React.addons.TestUtils.Simulate.change(select, {target: {value: 'one'}});
		expect(ListsActions.select).toBeCalledWith('one');
	});
});