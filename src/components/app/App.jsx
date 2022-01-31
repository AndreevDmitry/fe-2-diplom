import React from 'react';
import '../../css/App.css';
import '../../css/animate.css';

import Main from '../main/Main';
import SearchTickets from '../searchTickets/SearchTickets';
import SeatSelection from '../seatSelection/SeatSelectionContainer';
import Passengers from '../passengers/Passengers';
import PaySelection from '../paySection/PaySelection';
import CheckConfirmOrder from '../checkConfirmOrder/CheckConfirmOrder';
import OrderConfirmed from '../orderConfirmed/OrderConfirmed';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
// import NavBarTemporary from './components/NavBarTemporary';

import { Route } from 'react-router-dom';


export const App = () => {

	return (
		<div className="App">
			<NavBar />
			{/* <NavBarTemporary /> */}

			<Route exact path="/" render={() => <Main />} />
			<Route path="/search_tickets" render={() => <SearchTickets />} />
			<Route path="/seat_selection" render={() => <SeatSelection />} />
			<Route path="/passengers" render={() => <Passengers />} />
			<Route path="/pay_selection" render={() => <PaySelection />} />
			<Route path="/check_confirm_order" render={() => <CheckConfirmOrder />} />
			<Route path="/order_confirmed" render={() => <OrderConfirmed />} />
			
			<Footer />
		</div>
	);
};
