import React, { Component } from 'react';

import SectionSearchTicketsHeader from '../shared/HeaderSearchForm';
import SectionCheckConfirmOrder from './components/SectionCheckConfirmOrder';

class CheckConfirmOrder extends Component {
	render() {
		return (
			<div>
				<SectionSearchTicketsHeader />
				<SectionCheckConfirmOrder />
			</div>
		);
	};
};

export default CheckConfirmOrder;