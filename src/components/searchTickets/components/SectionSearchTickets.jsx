import React, { useEffect, useState}  from 'react';
import progressStateSelect from '../../../images/progress_state_select.png';
import progressStateDefault from '../../../images/progress_state_default.png';
import ProgressLineCost from '../../shared/ProgressLineCost';
import SearchTicketsJSX from './SearchTicketsJSX';
import SideBarSearchTicketsAndSeatSelection from './../../shared/SideBarSearchTicketsAndSeatSelection';
import preloderAnimation from '../../../images/preloader_animation.gif';

import { connect } from 'react-redux';
import { setDataFormAC } from '../../../redux/action';
import { filterTicketsAndSeatsReducerTC } from './../../../redux/filterTicketsAndSeats-reducer';
import { withRouter } from 'react-router';


function SectionSearchTickets(props) {
	const [preloader, setPreloader] = useState(props.preloader);

	useEffect(() => {
		props.setSeatsAndTickets('actualPage', props.match.url);	
	}, []);

	useEffect(() => {
		setPreloader(props.preloader);
	}, [preloader]);


	return (
		<div className="text-white tickets-search-window">

			<ProgressLineCost tickets={progressStateSelect}
				passengers={progressStateDefault}
				passengersClass=""
				payment={progressStateDefault}
				paymentClass=""
				checkClass="" />

			{preloader ?
				<div className="preloader d-flex justify-content-center"><p className="preloader-text">ИДЕТ ПОИСК</p><img src={preloderAnimation} alt="" />
				</div>
				:
				<div className="container d-flex flex-wrap">
					<SideBarSearchTicketsAndSeatSelection />

					<SearchTicketsJSX />
				</div>
			}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		preloader: state.filterChoiceTicketsAndSeatsPages.preloader
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		setDataForm: (form) => {
			const action = setDataFormAC(form);
			dispatch(action);
		},
		setSeatsAndTickets: 
		(fieldName, fieldValue) => dispatch(filterTicketsAndSeatsReducerTC(fieldName, fieldValue))
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SectionSearchTickets));