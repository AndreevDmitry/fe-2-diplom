import React from 'react';
import choiceTrainIcon from '../../../images/icon_choice_train.png';
import choiceTimeIcon from '../../../images/icon_choice_time.png';
import TrainJSX from './TrainJSX';
import train_fourth_class from '../../../images/train_fourth_class.png';
import train_third_class from '../../../images/train_third_class.png';
import train_second_class from '../../../images/train_second_class.png';
import train_first_class from '../../../images/train_first_class.png';

import { connect } from 'react-redux';
import { passengersAndPayAC, setRouteTrainSeatAC } from './../../../redux/action';
import { ucFL } from '../../..';
import { withRouter } from 'react-router';


class TrainTicket extends React.Component {

	state = {
		coach_id: '',
		seat_number: [],
		is_child: false,
		include_children_seat: false,
		sumSeats: 0,
		sumTicketsPay: 0,
		fourthClass: false,
		thirdClass: false,
		secondClass: false,
		firstClass: false,
		fourth: [],
		third: [],
		second: [],
		first: []
	}

	setCoachId = (id) => this.setState({ coach_id: id });

	setSeatNumber = (event) => {
		const currentNumber = event.currentTarget.innerHTML;

		if (this.state.seat_number.indexOf(currentNumber) > -1) {
			this.setState({
				seat_number: this.state.seat_number.filter(el => el !== currentNumber),
				sumTicketsPay: this.state.sumTicketsPay - this.props.payAdult
			});
		} else if (this.state.seat_number.length !== this.state.sumSeats) {
			this.setState({
				seat_number: [...this.state.seat_number, currentNumber],
				sumTicketsPay: (this.state.seat_number.length + 1) * this.props.payAdult
			});
		}
		this.props.setPassengersAndPay('seatsNumbers', this.state.seat_number);
	};

	setAdultSeats = (value) => {
		this.setState({ sumSeats: this.state.sumSeats + value });
		this.props.setPassengersAndPay('ticketsAdult', value);
	};

	setChildSeat = (value) => {
		this.setState({ sumSeats: this.state.sumSeats + value, is_child: value !== 0 });
		this.props.setPassengersAndPay('ticketsChild', value);
	};

	setChildWithoutSeat = (value) => {
		this.props.setPassengersAndPay('ticketsChildWithoutPlace', value);
		this.setState({ include_children_seat: value !== 0 });
	};

	resetParamsIfChangeClassTrain = () => {

		this.props.setPassengersAndPay('payAdult', 0);
		this.props.setPassengersAndPay('payChild', 0);
		this.props.setPassengersAndPay('ticketsAdult', 0);
		this.props.setPassengersAndPay('ticketsChild', 0);
		this.props.setPassengersAndPay('ticketsChildWithoutPlace', 0);
		this.props.setPassengersAndPay('seatsNumbers', []);
		this.setCoachId('');
		this.setState({
			seat_number: [],
			is_child: false,
			include_children_seat: false,
			sumSeats: 0,
			sumTicketsPay: 0,
			first: [],
			fourthClass: false,
			thirdClass: false,
			secondClass: false,
			firstClass: false
		});
	};

	setFourthClass = () => {
		this.props.choiceSeatsArray.map(el => {
			if (el.coach.class_type === 'fourth' && this.state.sumSeats !== 0) {
				this.props.setPassengersAndPay('payAdult', el.coach.top_price);
				this.props.setPassengersAndPay('payChild', Math.ceil(el.coach.top_price / 2));
				this.setCoachId(el.coach._id);
				this.setState({
					fourth: el,
					fourthClass: true,
					thirdClass: false,
					secondClass: false,
					firstClass: false
				});
			}

			if (this.state.fourthClass || this.state.thirdClass || this.state.secondClass || this.state.firstClass) {
				this.resetParamsIfChangeClassTrain();
			}
			return null;
		});
	};

	setThirdClass = () => {
		this.props.choiceSeatsArray.map(el => {
			if (el.coach.class_type === 'third' && this.state.sumSeats !== 0) {
				this.props.setPassengersAndPay('payAdult', el.coach.top_price);
				this.props.setPassengersAndPay('payChild', Math.ceil(el.coach.top_price / 2));
				this.setCoachId(el.coach._id);
				this.setState({
					third: el,
					fourthClass: false,
					thirdClass: true,
					secondClass: false,
					firstClass: false
				});
			}

			if (this.state.fourthClass || this.state.thirdClass || this.state.secondClass || this.state.firstClass) {
				this.resetParamsIfChangeClassTrain();
			}
			return null;
		});
	};

	setSecondClass = () => {
		this.props.choiceSeatsArray.map(el => {
			if (el.coach.class_type === 'second' && this.state.sumSeats !== 0) {
				this.props.setPassengersAndPay('payAdult', el.coach.top_price);
				this.props.setPassengersAndPay('payChild', Math.ceil(el.coach.top_price / 2));
				this.setCoachId(el.coach._id);
				this.setState({
					second: el,
					fourthClass: false,
					thirdClass: false,
					secondClass: true,
					firstClass: false
				});
			}

			if (this.state.fourthClass || this.state.thirdClass || this.state.secondClass || this.state.firstClass) {
				this.resetParamsIfChangeClassTrain();
			}
			return null;
		});
	};

	setFirstClass = () => {
		this.props.choiceSeatsArray.map(el => {
			if (el.coach.class_type === 'first' && this.state.sumSeats !== 0) {
				this.props.setPassengersAndPay('payAdult', el.coach.top_price);
				this.props.setPassengersAndPay('payChild', Math.ceil(el.coach.top_price / 2));
				this.setCoachId(el.coach._id);
				this.setState({
					first: el,
					fourthClass: false,
					thirdClass: false,
					secondClass: false,
					firstClass: true
				});
			}

			if (this.state.fourthClass || this.state.thirdClass || this.state.secondClass || this.state.firstClass) {
				this.resetParamsIfChangeClassTrain();
			}
			return null;
		});
	};

	render() {

		const getHours = (msc) => new Date(msc).getHours();
		const getMinutes = (msc) => (new Date(msc).getMinutes() < 10 ? '0' : '') + new Date(msc).getMinutes();

		if (this.state.seat_number.length === this.state.sumSeats) {
			this.props.setPassengersAndPay('seatsNumbers', this.state.seat_number);

			this.props.setRouteTrainSeat(
				this.props.trainId,
				this.state.coach_id,
				this.state.seat_number,
				this.state.is_child,
				this.state.include_children_seat
			);

			this.props.setActiveButton(false);
		} else {
			this.props.setActiveButton(true);
		}


		return (
			<div className="choice-of-place-there mb-3">
				{this.props.trainButton}
				<div className="choice-ticket-train-there d-flex flex-wrap mt-4 pt-3 justify-content-between">
					<div className="d-flex">
						<img className="align-self-center ml-5 mr-5" src={choiceTrainIcon} alt="..." />
						<ul className="list-unstyled">
							<li className="font-weight-bold">{this.props.trainName}</li>
							<li>Адлер</li>
							<li>{ucFL(this.props.cityNameDeparture)}</li>
							<li>{ucFL(this.props.cityNameArrival)}</li>
						</ul>
					</div>
					<div className="d-flex">
						<ul className="list-unstyled align-self-center">
							<li className="font-weight-bold">{getHours(this.props.dateTime)}:{getMinutes(this.props.dateTime)}</li>
							<li className="">{ucFL(this.props.cityNameDeparture)}</li>
							<li className="font-weight-light">{this.props.railwayStationDeparture}</li>
						</ul>
						<img className="col align-self-center" src={this.props.iconSearch} alt="иконка стрелки" />
						<ul className="list-unstyled align-self-center">
							<li className="font-weight-bold">{getHours(this.props.arrivalTime)}:{getMinutes(this.props.arrivalTime)}</li>
							<li className="">{ucFL(this.props.cityNameArrival)}</li>
							<li className="font-weight-light">{this.props.railwayStationArrival}</li>
						</ul>
					</div>
					<div className="d-flex mr-5">
						<img className="align-self-center" src={choiceTimeIcon} alt="..." />
						<ul className="list-unstyled align-self-center mt-2 ml-2">
							<li className="font-weight-bold">{getHours(this.props.duration)} часа</li>
							<li className="font-weight-bold">{getMinutes(this.props.duration)} минут</li>
						</ul>
					</div>
				</div>
				<h4 className="font-weight-bold mt-5 ml-3">Количество билетов</h4>
				<div className="d-flex flex-wrap">
					<div className="quantity-tickets-check-left col-lg-4">
						<select className="custom-select mt-4"
							onChange={(e) => this.setAdultSeats(+e.currentTarget.value)}>
							<option selected value="0">Взрослых - 0</option>
							<option value="1">Взрослых - 1</option>
							<option value="2">Взрослых - 2</option>
							<option value="3">Взрослых - 3</option>
							<option value="4">Взрослых - 4</option>
							<option value="5">Взрослых - 5</option>
						</select>
						<p className="mt-3">Можно добавить еще 3 пассажиров</p>
					</div>
					<div className="quantity-tickets-check-center col-lg-4">
						<select className="custom-select mt-4"
							onChange={(e) => this.setChildSeat(+e.currentTarget.value)}>
							<option selected value="0">Детских - 0</option>
							<option value="1">Детских - 1</option>
							<option value="2">Детских - 2</option>
							<option value="3">Детских - 3</option>
							<option value="4">Детских - 4</option>
							<option value="5">Детских - 5</option>
						</select>
						<p className="mt-3">Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</p>
					</div>
					<div className="quantity-tickets-check-right col-lg-4">
						<select className="custom-select mt-4"
							onChange={(e) => this.setChildWithoutSeat(+e.currentTarget.value)}>
							<option selected value="0">Детских «без места» - 0</option>
							<option value="1">Детских «без места» - 1</option>
							<option value="2">Детских «без места» - 2</option>
							<option value="3">Детских «без места» - 3</option>
							<option value="4">Детских «без места» - 4</option>
							<option value="5">Детских «без места» - 5</option>
						</select>
					</div>
				</div>
				<div className="horizontal-line-gray mt-5 mb-5"></div>
				<h5 className="font-weight-bold ml-3">Тип вагона</h5>
				<div className="choice-type-vagon-button d-flex justify-content-around mt-4 mb-2">
					<div className="d-flex flex-column justify-content-center"
						onClick={this.setFourthClass}>
						<div className="icon-type-vagon-seat align-self-center"></div>
						<p className="text-center">Сидячий</p>
					</div>
					<div className="d-flex flex-column justify-content-center"
						onClick={this.setThirdClass}>
						<div className="icon-type-vagon-reserved-seat align-self-center"></div>
						<p className="text-center">Плацкарт</p>
					</div>
					<div className="d-flex flex-column justify-content-center"
						onClick={this.setSecondClass}>
						<div className="icon-type-vagon-coupe align-self-center"></div>
						<p className="text-center">Купе</p>
					</div>
					<div className="d-flex flex-column justify-content-center"
						onClick={this.setFirstClass}>
						<div className="icon-type-vagon-luxury align-self-center"></div>
						<p className="text-center">Люкс</p>
					</div>
				</div>
				{this.state.fourthClass && <TrainJSX
					train={this.state.fourth} image={train_fourth_class} seatNumber={this.state.seat_number} setSeatNumber={this.setSeatNumber} sumTicketsPay={this.state.sumTicketsPay} />}
				{this.state.thirdClass && <TrainJSX
					train={this.state.third} image={train_third_class} seatNumber={this.state.seat_number} setSeatNumber={this.setSeatNumber} sumTicketsPay={this.state.sumTicketsPay} />}
				{this.state.secondClass && <TrainJSX
					train={this.state.second} image={train_second_class} seatNumber={this.state.seat_number} setSeatNumber={this.setSeatNumber} sumTicketsPay={this.state.sumTicketsPay} />}
				{this.state.firstClass && <TrainJSX
					train={this.state.first} image={train_first_class} seatNumber={this.state.seat_number} setSeatNumber={this.setSeatNumber} sumTicketsPay={this.state.sumTicketsPay} />}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		form: state.sectionSearch.form,
		ticketsArray: state.filterChoiceTicketsAndSeatsPages.ticketsArray,
		choiceSeatsArray: state.filterChoiceTicketsAndSeatsPages.choiceSeatsArray,
		trainId: state.filterChoiceTicketsAndSeatsPages.trainId,
		ticketsAdult: state.passengersAndPay.ticketsAdult,
		payAdult: state.passengersAndPay.payAdult,
		ticketsChild: state.passengersAndPay.ticketsChild,
		payChild: state.passengersAndPay.payChild
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setRouteTrainSeat: (train, coach_id, trainId, seat_number, is_child, include_children_seat) => {
			const action = setRouteTrainSeatAC(train, coach_id, trainId, seat_number, is_child, include_children_seat);
			dispatch(action);
		},
		setPassengersAndPay: (fieldName, fieldValue) => dispatch(passengersAndPayAC(fieldName, fieldValue))
	}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrainTicket));