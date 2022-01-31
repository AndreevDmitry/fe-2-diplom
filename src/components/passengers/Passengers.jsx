import React, { Component } from 'react';

import SectionSearchTicketsHeader from '../shared/HeaderSearchForm';
import SectionPassengers from './components/SectionPassengers';

class Passengers extends Component {
	render() {
		return (
			<div>
				<SectionSearchTicketsHeader />
				<SectionPassengers />
			</div>
		);
	};
};

export default Passengers;