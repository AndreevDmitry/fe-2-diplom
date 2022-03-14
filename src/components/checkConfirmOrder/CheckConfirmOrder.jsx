import React from 'react';

import SectionSearchTicketsHeader from '../shared/HeaderSearchForm';
import SectionCheckConfirmOrder from './components/SectionCheckConfirmOrder';

function CheckConfirmOrder() {
	return (
		<div>
			<SectionSearchTicketsHeader />
			<SectionCheckConfirmOrder />
		</div>
	);
};

export default CheckConfirmOrder;