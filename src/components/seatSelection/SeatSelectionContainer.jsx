import React from 'react';

import SectionSearchTicketsHeader from '../shared/HeaderSearchForm';
import SectionSeatSelection from './components/SectionSeatSelection';

function SeatSelectionContainer() {
	return (
		<div>
			<SectionSearchTicketsHeader />
			<SectionSeatSelection />
		</div>
	);
};

export default SeatSelectionContainer;