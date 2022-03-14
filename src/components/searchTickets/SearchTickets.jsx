import React from 'react';
import SectionSearchTicketsHeader from '../shared/HeaderSearchForm';
import SectionSearchTickets from './components/SectionSearchTickets';

function SearchTickets() {
	return (
		<div>
			<SectionSearchTicketsHeader />
			<SectionSearchTickets />
		</div>
	);
};

export default SearchTickets;