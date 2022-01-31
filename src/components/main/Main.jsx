import React, { Component } from 'react';

import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import MainPageHeaderAndForm from './components/MainPageHeaderAndForm';

class Main extends Component {
	render() {
		return (
			<div>
				<MainPageHeaderAndForm />
				<AboutUs />
				<HowItWorks />
				<Reviews />
			</div>
		);
	};
};

export default Main;