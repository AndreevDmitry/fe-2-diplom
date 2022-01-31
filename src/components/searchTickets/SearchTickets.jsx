import React, { Component } from 'react';
import SectionSearchTicketsHeader from '../shared/HeaderSearchForm';
import SectionSearchTickets from './components/SectionSearchTickets';

class SearchTickets extends Component {
	render() {
		return (
			<div>
				<SectionSearchTicketsHeader />
				<SectionSearchTickets />
			</div>
		);
	};
};

export default SearchTickets;