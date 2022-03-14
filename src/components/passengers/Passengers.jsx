import React from 'react';

import SectionSearchTicketsHeader from '../shared/HeaderSearchForm';
import SectionPassengers from './components/SectionPassengers';

function Passengers() {
	return (
		<div>
			<SectionSearchTicketsHeader />
			<SectionPassengers />
		</div>
	);
};

export default Passengers;