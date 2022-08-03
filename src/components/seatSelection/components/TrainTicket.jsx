import React, {useState} from 'react';
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


function TrainTicket(props) {
	const [coach_id, setCoachId] = useState('');
	const [seat_number, setSeatNumber] = useState([]);
	const [is_child, setChildSeat] = useState(false);
	const [include_children_seat, setChildWithoutSeat] = useState(false);
	const [sumSeats, setSumSeats] = useState(0);
	const [sumTicketsPay, setSumTicketsPay] = useState(0);
	const [fourthClass, setFourthClass] = useState(false);
	const [thirdClass, setThirdClass] = useState(false);
	const [secondClass, setSecondClass] = useState(false);
	const [firstClass, setFirstClass] = useState(false);
	const [fourth, setFourth] = useState([]);
	const [third, setThird] = useState([]);
	const [second, setSecond] = useState([]);
	const [first, setFirst] = useState([]);
	//state = {
		//coach_id: '',
		//seat_number: [],
		//is_child: false,
		//include_children_seat: false,
		//sumSeats: 0,
		//sumTicketsPay: 0,
		//fourthClass: false,
		//thirdClass: false,
		//secondClass: false,
		//firstClass: false,
		//fourth: [],
		//third: [],
		//second: [],
		//first: []
	//}

	const handleSeatNumber = (event) => {
		const currentNumber = event.currentTarget.innerHTML;

		if (seat_number.indexOf(currentNumber) > -1) {
			setSeatNumber(seat_number.filter(el => el !== currentNumber));
			setSumTicketsPay(sumTicketsPay - props.payAdult);
		} else if (seat_number.length !== sumSeats) {
			setSeatNumber({...seat_number, currentNumber});
			setSumTicketsPay((seat_number.length + 1) * props.payAdult);
		}
		props.setPassengersAndPay('seatsNumbers', seat_number);
	};

	const handleAdultSeats = (value) => {
		setSumSeats(sumSeats + value);
		props.setPassengersAndPay('ticketsAdult', value);
	};

	const handleChildSeat = (value) => {
		setSumSeats(sumSeats + value);
		setChildSeat(value !== 0);
		props.setPassengersAndPay('ticketsChild', value);
	};

	const handleChildWithoutSeat = (value) => {
		props.setPassengersAndPay('ticketsChildWithoutPlace', value);
		setChildWithoutSeat(value !== 0);
	};

	const resetParamsIfChangeClassTrain = () => {
		props.setPassengersAndPay('payAdult', 0);
		props.setPassengersAndPay('payChild', 0);
		props.setPassengersAndPay('ticketsAdult', 0);
		props.setPassengersAndPay('ticketsChild', 0);
		props.setPassengersAndPay('ticketsChildWithoutPlace', 0);
		props.setPassengersAndPay('seatsNumbers', []);
		setCoachId('');
		setSeatNumber([]);
		setChildSeat(false);
		setChildWithoutSeat(false);
		setSumSeats(0);
		setSumTicketsPay(0);
		setFirst([]);
		setFourthClass(false);
		setThirdClass(false);
		setSecondClass(false);
		setFirstClass(false);
	};

	const handleFourthClass = () => {
		props.choiceSeatsArray.map(el => {
			if (el.coach.class_type === 'fourth' && sumSeats !== 0) {
				props.setPassengersAndPay('payAdult', el.coach.top_price);
				props.setPassengersAndPay('payChild', Math.ceil(el.coach.top_price / 2));
				setCoachId(el.coach._id);
				setFourth(el);
				setFourthClass(true);
				setThirdClass(false);
				setSecondClass(false);
				setFirstClass(false);
			}

			if (fourthClass || thirdClass || secondClass || firstClass) {
				resetParamsIfChangeClassTrain();
			}
			return null;
		});
	};

	const handleThirdClass = () => {
		props.choiceSeatsArray.map(el => {
			if (el.coach.class_type === 'third' && sumSeats !== 0) {
				props.setPassengersAndPay('payAdult', el.coach.top_price);
				props.setPassengersAndPay('payChild', Math.ceil(el.coach.top_price / 2));
				setCoachId(el.coach._id);
				setThird(el);
				setFourthClass(false);
				setThirdClass(true);
				setSecondClass(false);
				setFirstClass(false);

			}

			if (fourthClass || thirdClass || secondClass || firstClass) {
				resetParamsIfChangeClassTrain();
			}
			return null;
		});
	};

	const handleSecondClass = () => {
		props.choiceSeatsArray.map(el => {
			if (el.coach.class_type === 'second' && sumSeats !== 0) {
				props.setPassengersAndPay('payAdult', el.coach.top_price);
				props.setPassengersAndPay('payChild', Math.ceil(el.coach.top_price / 2));
				setCoachId(el.coach._id);				
				setSecond(el);
				setFourthClass(false);
				setThirdClass(false);
				setSecondClass(true);
				setFirstClass(false);
			}

			if (fourthClass || thirdClass || secondClass || firstClass) {
				resetParamsIfChangeClassTrain();
			}
			return null;
		});
	};

	const handleFirstClass = () => {
		props.choiceSeatsArray.map(el => {
			if (el.coach.class_type === 'first' && sumSeats !== 0) {
				props.setPassengersAndPay('payAdult', el.coach.top_price);
				props.setPassengersAndPay('payChild', Math.ceil(el.coach.top_price / 2));
				setCoachId(el.coach._id);
				setFirst(el);
				setFourthClass(false);
				setThirdClass(false);
				setSecondClass(false);
				setFirstClass(true);
			}

			if (fourthClass || thirdClass || secondClass || firstClass) {
				resetParamsIfChangeClassTrain();
			}
			return null;
		});
	};

	const getHours = (msc) => new Date(msc).getHours();
	const getMinutes = (msc) => (new Date(msc).getMinutes() < 10 ? '0' : '') + new Date(msc).getMinutes();

	if (seat_number.length === sumSeats) {
		props.setPassengersAndPay('seatsNumbers', seat_number);

		props.setRouteTrainSeat(
			props.trainId,
			coach_id,
			seat_number,
			is_child,
			include_children_seat
		);

		props.setActiveButton(false);
	} else {
		props.setActiveButton(true);
	}


		return (
			<div className="choice-of-place-there mb-3">
				{props.trainButton}
				<div className="choice-ticket-train-there d-flex flex-wrap mt-4 pt-3 justify-content-between">
					<div className="d-flex">
						<img className="align-self-center ml-5 mr-5" src={choiceTrainIcon} alt="..." />
						<ul className="list-unstyled">
							<li className="font-weight-bold">{props.trainName}</li>
							<li>Адлер</li>
							<li>{ucFL(props.cityNameDeparture)}</li>
							<li>{ucFL(props.cityNameArrival)}</li>
						</ul>
					</div>
					<div className="d-flex">
						<ul className="list-unstyled align-self-center">
							<li className="font-weight-bold">{getHours(props.dateTime)}:{getMinutes(props.dateTime)}</li>
							<li className="">{ucFL(props.cityNameDeparture)}</li>
							<li className="font-weight-light">{props.railwayStationDeparture}</li>
						</ul>
						<img className="col align-self-center" src={props.iconSearch} alt="иконка стрелки" />
						<ul className="list-unstyled align-self-center">
							<li className="font-weight-bold">{getHours(props.arrivalTime)}:{getMinutes(props.arrivalTime)}</li>
							<li className="">{ucFL(props.cityNameArrival)}</li>
							<li className="font-weight-light">{props.railwayStationArrival}</li>
						</ul>
					</div>
					<div className="d-flex mr-5">
						<img className="align-self-center" src={choiceTimeIcon} alt="..." />
						<ul className="list-unstyled align-self-center mt-2 ml-2">
							<li className="font-weight-bold">{getHours(props.duration)} часа</li>
							<li className="font-weight-bold">{getMinutes(props.duration)} минут</li>
						</ul>
					</div>
				</div>
				<h4 className="font-weight-bold mt-5 ml-3">Количество билетов</h4>
				<div className="d-flex flex-wrap">
					<div className="quantity-tickets-check-left col-lg-4">
						<select className="custom-select mt-4"
							onChange={(e) => handleAdultSeats(+e.currentTarget.value)}>
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
							onChange={(e) => handleChildSeat(+e.currentTarget.value)}>
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
							onChange={(e) => handleChildWithoutSeat(+e.currentTarget.value)}>
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
						onClick={handleFourthClass}>
						<div className="icon-type-vagon-seat align-self-center"></div>
						<p className="text-center">Сидячий</p>
					</div>
					<div className="d-flex flex-column justify-content-center"
						onClick={handleThirdClass}>
						<div className="icon-type-vagon-reserved-seat align-self-center"></div>
						<p className="text-center">Плацкарт</p>
					</div>
					<div className="d-flex flex-column justify-content-center"
						onClick={handleSecondClass}>
						<div className="icon-type-vagon-coupe align-self-center"></div>
						<p className="text-center">Купе</p>
					</div>
					<div className="d-flex flex-column justify-content-center"
						onClick={handleFirstClass}>
						<div className="icon-type-vagon-luxury align-self-center"></div>
						<p className="text-center">Люкс</p>
					</div>
				</div>
				{fourthClass && <TrainJSX
					train={fourth} image={train_fourth_class} seatNumber={seat_number} setSeatNumber={handleSeatNumber} sumTicketsPay={sumTicketsPay} />}
				{thirdClass && <TrainJSX
					train={third} image={train_third_class} seatNumber={seat_number} setSeatNumber={handleSeatNumber} sumTicketsPay={sumTicketsPay} />}
				{secondClass && <TrainJSX
					train={second} image={train_second_class} seatNumber={seat_number} setSeatNumber={handleSeatNumber} sumTicketsPay={sumTicketsPay} />}
				{firstClass && <TrainJSX
					train={first} image={train_first_class} seatNumber={seat_number} setSeatNumber={handleSeatNumber} sumTicketsPay={sumTicketsPay} />}
			</div>
		);
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