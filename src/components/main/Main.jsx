import React from 'react';

import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import MainPageHeaderAndForm from './components/MainPageHeaderAndForm';

function Main() {
	return (
		<div>
			<MainPageHeaderAndForm />
			<AboutUs />
			<HowItWorks />
			<Reviews />
		</div>
	);
};

export default Main;