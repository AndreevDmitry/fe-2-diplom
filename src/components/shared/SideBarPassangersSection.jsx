import React from 'react';
import iconThere from '../../images/icon_there.png';
import iconBack from '../../images/icon_back.png';
import iconMinus from '../../images/icon_minus.png';
import iconRuble from '../../images/icon_ruble.png';
import iconSearchThere from '../../images/icon_search_there.png';
import iconRubleSmall from '../../images/icon_ruble_small.png';
import iconPassanger from '../../images/icon_passanger.png';

import { connect } from 'react-redux';
import { ucFL, numSpc } from '../..';


function SideBarPassangersAndPaySection(props) {
	const ticketSelected = props.ticketsArray.find(el => el.departure._id === props.trainId);
	let fromDateTime = ticketSelected.departure.from.datetime;
	let toDateTime = ticketSelected.departure.to.datetime;
	let duration = ticketSelected.departure.duration;
	let fromArrival = fromDateTime + duration;
	let toArrival = toDateTime + duration;

	const getHours = (msc) => new Date(msc).getHours();
	const getMinutes = (msc) => (new Date(msc).getMinutes() < 10 ? '0' : '') + new Date(msc).getMinutes();

	return (
		<div className="trip-details-tickets col-lg-3 mt-5 mb-5 mr-4">
			<div className="trip-details bg-dark pt-4 pb-4">
				<h5 className="text-center text-uppercase">Детали поездки</h5>
				<hr className="bg-light mt-4" />
				<div className="d-flex align-items-center">
					<img className="ml-3" src={iconThere} alt="иконка туда" />
					<h6 className="ml-1 pt-2">Туда</h6>
					<h6 className="ml-auto pt-2 font-weight-light">{props.form.whereFromDate}</h6>
					<img className="ml-auto mr-3" src={iconMinus} alt="..." />
				</div>
				<div className="d-flex justify-content-between">
					<div className="ml-3">
						<p className="mt-3">№ Поезда</p>
						<p className="mt-3">Название</p>
					</div>
					<div className="mr-3 text-right">
						<h6 className="mt-3">{ticketSelected.departure.train.name}</h6>
						<p className="mt-3">Адлер</p>
						<p className="mt-n3">{ucFL(ticketSelected.departure.from.city.name)}</p>
					</div>
				</div>
				<div className="d-flex justify-content-between">
					<div className="ml-3 mt-3">
						<h6>{getHours(fromDateTime)}:{getMinutes(fromDateTime)}</h6>
						<p className="text-white-50">{props.form.whereFromDate}</p>
					</div>
					<div>
						<p>{getHours(duration)}:{getMinutes(duration)}</p>
						<img className="mt-n4" src={iconSearchThere} alt="иконка стрелки вправо" />
					</div>
					<div className="mr-3 mt-3 text-right">
						<h6>{getHours(fromArrival)}:{getMinutes(fromArrival)}</h6>
						<p className="text-white-50">{props.form.whereFromDate}</p>
					</div>
				</div>
				<div className="d-flex justify-content-between">
					<div className="ml-3">
						<h6>{ucFL(ticketSelected.departure.from.city.name)}</h6>
						<p className="text-white-50">{ticketSelected.departure.from.railway_station_name}</p>
						<p className="mt-n3 text-white-50">вокзал</p>
					</div>
					<div className="mr-3 text-right">
						<h6>{ucFL(ticketSelected.departure.to.city.name)}</h6>
						<p className="text-white-50">{ticketSelected.departure.to.railway_station_name}</p>
						<p className="mt-n3 text-white-50">вокзал</p>
					</div>
				</div>
				<hr className="bg-light" />

				<div className="d-flex align-items-center">
					<img className="ml-3" src={iconBack} alt="иконка туда" />
					<h6 className="ml-1 pt-2">Обратно</h6>
					<h6 className="ml-auto pt-2 font-weight-light">{props.form.whereToDate}</h6>
					<img className="ml-auto mr-3" src={iconMinus} alt="..." />
				</div>
				<div className="d-flex justify-content-between">
					<div className="ml-3">
						<p className="mt-3">№ Поезда</p>
						<p className="mt-3">Название</p>
					</div>
					<div className="mr-3 text-right">
						<h6 className="mt-3">{ticketSelected.departure.train.name}</h6>
						<p className="mt-3">Адлер</p>
						<p className="mt-n3">{ucFL(ticketSelected.departure.to.city.name)}</p>
					</div>
				</div>
				<div className="d-flex justify-content-between">
					<div className="ml-3 mt-3">
						<h6>{getHours(toDateTime)}:{getMinutes(toDateTime)}</h6>
						<p className="text-white-50">{props.form.whereToDate}</p>
					</div>
					<div>
						<p>{getHours(duration)}:{getMinutes(duration)}</p>
						<img className="mt-n4" src={iconSearchThere} alt="иконка стрелки вправо" />
					</div>
					<div className="mr-3 mt-3 text-right">
						<h6>{getHours(toArrival)}:{getMinutes(toArrival)}</h6>
						<p className="text-white-50">{props.form.whereToDate}</p>
					</div>
				</div>
				<div className="d-flex justify-content-between">
					<div className="ml-3">
						<h6>{ucFL(ticketSelected.departure.to.city.name)}</h6>
						<p className="text-white-50">{ticketSelected.departure.to.railway_station_name}</p>
						<p className="mt-n3 text-white-50">вокзал</p>
					</div>
					<div className="mr-3 text-right">
						<h6>{ucFL(ticketSelected.departure.from.city.name)}</h6>
						<p className="text-white-50">{ticketSelected.departure.from.railway_station_name}</p>
						<p className="mt-n3 text-white-50">вокзал</p>
					</div>
				</div>
				<hr className="bg-light" />

				<div className="d-flex align-items-center">
					<img className="ml-3" src={iconPassanger} alt="иконка пасссажир" />
					<h5 className="ml-2">Пассажиры</h5>
					<img className="ml-auto mr-3" src={iconMinus} alt="..." />
				</div>
				<div className="d-flex justify-content-between">
					<div className="ml-3 mt-3">
						<p>{props.ticketsAdult} Взрослых</p>
						{props.ticketsChild !== 0 && <p>{props.ticketsChild} Ребенок</p>}
						{props.ticketsChildWithoutPlace !== 0 && <p>{props.ticketsChildWithoutPlace} Ребенок без места</p>}
					</div>
					<div className="mr-3 mt-3">
						<h6>{numSpc(props.ticketsAdult * props.payAdult)}<img className="ml-1" src={iconRubleSmall} alt="..." /></h6>
						{props.ticketsChild !== 0 && <h6 className="mt-3">{numSpc(props.ticketsChild * props.payChild)}<img className="ml-1" src={iconRubleSmall} alt="..." /></h6>}
					</div>
				</div>
				<hr className="bg-light" />
				<div className="d-flex justify-content-between mt-4">
					<h3 className="ml-3">Итог</h3>
					<h3 className="mr-3 text-warning">{numSpc((props.ticketsAdult * props.payAdult) + (props.ticketsChild * props.payChild))}<img className="ml-2" src={iconRuble} alt="..." /></h3>
				</div>
			</div>
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
		payChild: state.passengersAndPay.payChild,
		ticketsChildWithoutPlace: state.passengersAndPay.ticketsChildWithoutPlace,
	};
};

export default connect(mapStateToProps, null)(SideBarPassangersAndPaySection);