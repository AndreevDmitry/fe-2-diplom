import React from 'react';
import progressStateSelect from '../../../images/progress_state_select.png';
import progressStateDefault from '../../../images/progress_state_default.png';
import ProgressLineCost from '../../shared/ProgressLineCost';
import SideBarSearchTicketsAndSeatSelection from '../../shared/SideBarSearchTicketsAndSeatSelection';
import choiceOtherTrainButtonThere from '../../../images/choice_other_train_button_there.png';
import iconSearchThere from '../../../images/icon_search_there.png';
import choiceOtherTrainButtonBack from '../../../images/choice_other_train_button_back.png';
import iconSearchBack from '../../../images/icon_search_back.png';
import TrainTicket from './TrainTicket';

import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';



class SectionSeatSelection extends React.Component {

	state = {
		disabledButton: true
	}

	setActiveButton = (value) => {
		this.setState({ disabledButton: value });
	}

	setRouteTrainSeatReducer = () => {
		window.scrollTo(0, 700);

		this.props.history.push('/passengers');
	}

	trainButtonFrom =
		<div className="choice-other-train-button d-flex flex-wrap mt-4">
			<button type="button" className="btn btn-outline-light p-0 ml-3"><img src={choiceOtherTrainButtonThere} alt="..." /></button>
			<NavLink type="button"
				className="btn btn-outline-dark ml-3 pl-5 pr-5 pt-3 font-weight-bold"
				to="/search_tickets">Выбрать другой поезд</NavLink>
		</div>;

	trainButtonTo =
		<div className="choice-other-train-button d-flex flex-wrap justify-content-end mt-4">
			<button type="button" className="btn btn-outline-light p-0"><img src={choiceOtherTrainButtonBack} alt="..." /></button>
			<NavLink type="button" className="btn btn-outline-dark ml-3 mr-3 pl-5 pr-5 pt-3 font-weight-bold"
				to="/search_tickets">Выбрать другой поезд</NavLink>
		</div>;

	render() {

		const ticketSelected = this.props.ticketsArray.find(el => el.departure._id === this.props.trainId);
		let fromDateTime = ticketSelected.departure.from.datetime;
		let toDateTime = ticketSelected.departure.to.datetime;
		let duration = ticketSelected.departure.duration;
		let fromArrival = fromDateTime + duration;
		let toArrival = toDateTime + duration;

		return (
			<div>
				<ProgressLineCost tickets={progressStateSelect}
					passengers={progressStateDefault}
					passengersClass=""
					payment={progressStateDefault}
					paymentClass=""
					checkClass="" />

				<div className="container d-flex flex-wrap">
					<SideBarSearchTicketsAndSeatSelection />

					<div className="choice-of-place col pt-5 pb-5">
						<h3 className="text-uppercase">выбор мест</h3>

						<TrainTicket
							trainButton={this.trainButtonFrom}
							trainName={ticketSelected.departure.train.name}
							cityNameDeparture={ticketSelected.departure.from.city.name}
							cityNameArrival={ticketSelected.departure.to.city.name}
							railwayStationDeparture={ticketSelected.departure.from.railway_station_name}
							railwayStationArrival={ticketSelected.departure.to.railway_station_name}
							dateTime={fromDateTime}
							arrivalTime={fromArrival}
							duration={duration}
							iconSearch={iconSearchThere}
							setActiveButton={this.setActiveButton} />

						<TrainTicket
							trainButton={this.trainButtonTo}
							trainName={ticketSelected.departure.train.name}
							cityNameDeparture={ticketSelected.departure.to.city.name}
							cityNameArrival={ticketSelected.departure.from.city.name}
							railwayStationDeparture={ticketSelected.departure.to.railway_station_name}
							railwayStationArrival={ticketSelected.departure.from.railway_station_name}
							dateTime={toDateTime}
							arrivalTime={toArrival}
							duration={duration}
							iconSearch={iconSearchBack}
							setActiveButton={this.setActiveButton} />

						<div className="d-flex justify-content-end">
							<button
								className="btn btn-warning text-white font-weight-bold pl-5 pr-5 mt-5 mb-5"
								type="button"
								disabled={this.state.disabledButton}
								onClick={this.setRouteTrainSeatReducer}
							>Далее</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		ticketsArray: state.filterChoiceTicketsAndSeatsPages.ticketsArray,
		trainId: state.filterChoiceTicketsAndSeatsPages.trainId
	}
}

export default withRouter(connect(mapStateToProps, null)(SectionSeatSelection));