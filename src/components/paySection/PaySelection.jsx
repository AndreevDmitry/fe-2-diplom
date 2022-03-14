import React from 'react';

import SectionSearchTicketsHeader from '../shared/HeaderSearchForm';
import PaySectionSearch from './components/PaySectionSearch';

function PaySelection() {
	return (
		<div>
			<SectionSearchTicketsHeader />
			<PaySectionSearch />
		</div>
	);
};

export default PaySelection;