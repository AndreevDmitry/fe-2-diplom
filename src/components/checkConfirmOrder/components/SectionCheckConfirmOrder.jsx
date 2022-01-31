import React from 'react';
import iconRuble from '../../../images/icon_ruble.png';
import progressStateSelected from '../../../images/progress_state_selected.png';
import iconSearchThere from '../../../images/icon_search_there.png';
import iconTicketTrain from '../../../images/icon_ticket_train.png';
import iconArrowRightGray from '../../../images/icon_arrow_right_gray.png'
import iconArrowRightBlack from '../../../images/icon_arrow_right_black.png'
import iconSearchBack from '../../../images/icon_search_back.png';
import iconWifiRocketCup from '../../../images/icons_wifiRocketCup.png';
import ProgressLineCost from "../../shared/ProgressLineCost";
import SideBarPassangersSection from '../../shared/SideBarPassangersSection';
import TicketPriceAndSeats from '../../searchTickets/components/TicketPriceAndSeats';
import PassengerJSX from './PassengerJSX';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { ucFL, numSpc } from '../../..';

const SectionCheckConfirmOrder = (props) => {

	const ticketSelected = props.ticketsArray.find(el => el.departure._id === props.trainId);
	let fromDateTime = ticketSelected.departure.from.datetime;
	let toDateTime = ticketSelected.departure.to.datetime;
	let duration = ticketSelected.departure.duration;
	let fromArrival = fromDateTime + duration;
	let toArrival = toDateTime + duration;

	const getHours = (msc) => new Date(msc).getHours();
	const getMinutes = (msc) => (new Date(msc).getMinutes() < 10 ? '0' : '') + new Date(msc).getMinutes();

	const passengersJSX = props.seats.map((el, i) => <PassengerJSX key={i} personInfo={el.person_info} />);

	return (
		<div>
			<ProgressLineCost tickets={progressStateSelected}
				passengers={progressStateSelected}
				passengersClass="completed"
				payment={progressStateSelected}
				paymentClass="completed"
				checkClass="completed" />

			<div className="container d-flex flex-wrap">
				<SideBarPassangersSection />

				<div className="tickets-search-result col pt-5 pb-5">
					<div className="result-search-of-tickets col">
						<h5 className="row p-4 border-bottom mb-0">Поезд</h5>
						<div className="row">
							<div className="select-tickets-search-number-train col-lg-3 pt-5 pb-5">
								<img className="pl-5" src={iconTicketTrain} alt="иконка поезда" />
								<h5 className="text-center">{ticketSelected.departure.train.name}</h5>
								<p className="pl-3 pt-5 font-weight-light">Адлер<img className="pl-2" src={iconArrowRightGray}
									alt="..." /></p>
								<p className="pl-3">{ucFL(ticketSelected.departure.from.city.name)}<img className="pl-2" src={iconArrowRightBlack} alt="..." /></p>
								<p className="pl-3">{ucFL(ticketSelected.departure.to.city.name)}</p>
							</div>
							<div className="col-lg-9">
								<div className="row h-100">
									<div className="col-lg-8">
										<div className="row pl-4 pr-4 pt-5 justify-content-between">
											<div>
												<h5>{getHours(fromDateTime)}:{getMinutes(fromDateTime)}</h5>
												<p>{ucFL(ticketSelected.departure.from.city.name)}</p>
												<p className="font-weight-light">{ticketSelected.departure.from.railway_station_name}</p>
											</div>
											<div className="pl-4">
												<p className="font-weight-light">{getHours(duration)}:{getMinutes(duration)}</p>
												<img src={iconSearchThere} alt="иконка стрелки вправо" />
											</div>
											<div className="pl-4">
												<h5>{getHours(fromArrival)}:{getMinutes(fromArrival)}</h5>
												<p>{ucFL(ticketSelected.departure.to.city.name)}</p>
												<p className="font-weight-light">{ticketSelected.departure.to.railway_station_name}</p>
											</div>
										</div>
										<div className="row pl-4 pr-4 pt-5 justify-content-between">
											<div>
												<h5>{getHours(toArrival)}:{getMinutes(toArrival)}</h5>
												<p>{ucFL(ticketSelected.departure.from.city.name)}</p>
												<p className="font-weight-light">{ticketSelected.departure.from.railway_station_name}</p>
											</div>
											<div className="pl-4">
												<p className="font-weight-light">{getHours(duration)}:{getMinutes(duration)}</p>
												<img src={iconSearchBack} alt="иконка стрелки влево" />
											</div>
											<div className="pl-4">
												<h5>{getHours(toDateTime)}:{getMinutes(toDateTime)}</h5>
												<p>{ucFL(ticketSelected.departure.to.city.name)}</p>
												<p className="font-weight-light">{ticketSelected.departure.to.railway_station_name}</p>
											</div>
										</div>
									</div>

									<div className="ticketPriceAndSeats col h-100 pl-4 pt-5 pr-4">
										<div>
											{ticketSelected.departure.have_fourth_class &&
												<TicketPriceAndSeats name="Сидячий"
													seats={ticketSelected.available_seats_info.fourth}
													price={numSpc(ticketSelected.departure.price_info.fourth.top_price)} />
											}
											{ticketSelected.departure.have_third_class &&
												<TicketPriceAndSeats name="Плацкарт"
													seats={ticketSelected.available_seats_info.third}
													price={numSpc(ticketSelected.departure.price_info.third.top_price)} />
											}
											{ticketSelected.departure.have_second_class &&
												<TicketPriceAndSeats name="Купе"
													seats={ticketSelected.available_seats_info.second}
													price={numSpc(ticketSelected.departure.price_info.second.top_price)} />
											}
											{ticketSelected.departure.have_first_class &&
												<TicketPriceAndSeats name="Люкс"
													seats={ticketSelected.available_seats_info.first}
													price={numSpc(ticketSelected.departure.price_info.first.top_price)} />
											}
										</div>

										<div className="row pb-3 justify-content-end">
											<img className="pb-3" src={iconWifiRocketCup} alt="wifi-rocket-cup" />

											<NavLink
												className="btn btn-outline-dark font-weight-bold btn-sm pl-5 pr-5"
												to="/search_tickets"
												type="button">Изменить</NavLink>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="result-search-of-tickets col mt-5">
						<h5 className="row p-4 border-bottom mb-0">Пассажиры</h5>
						<div className="row">
							<div className="col-lg-8">
								{passengersJSX}
							</div>
							<div className="col-lg-4 pb-3 align-self-end">
								<div className="row justify-content-end mt-4 mb-2">
									<h4 className="mr-3">Всего</h4>
									<h4 className="mr-3">{numSpc((props.ticketsAdult * props.payAdult) + (props.ticketsChild * props.payChild))}<img className="ml-2" src={iconRuble} alt="..." /></h4>
								</div>
								<div className="row justify-content-end">
									<NavLink 
									className="btn btn-outline-dark font-weight-bold btn-sm mr-4 pl-5 pr-5" 
									to="/passengers"
									type="button">Изменить</NavLink>
								</div>
							</div>
						</div>
					</div>
					<div className="result-search-of-tickets col mt-5">
						<h5 className="row p-4 border-bottom mb-0">Способ оплаты</h5>
						<h6 className="row pl-4 pt-4">{props.paymentMethod === "cash" ? "Наличными" : "Онлайн"}</h6>
						<div className="row justify-content-end">
							<NavLink 
							className="btn btn-outline-dark font-weight-bold btn-sm m-4 pl-5 pr-5" 
							to="/pay_selection"
							type="button">Изменить</NavLink>
						</div>
					</div>
					<div className="d-flex justify-content-end mt-5">
						<NavLink 
						className="btn btn-warning text-white text-uppercase pl-5 pr-5 mt-5 mb-3" 
						to="/order_confirmed" 
						type="button">подтвердить</NavLink>
					</div>
				</div>

			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		ticketsArray: state.filterChoiceTicketsAndSeatsPages.ticketsArray,
		trainId: state.filterChoiceTicketsAndSeatsPages.trainId,
		ticketsAdult: state.passengersAndPay.ticketsAdult,
		payAdult: state.passengersAndPay.payAdult,
		ticketsChild: state.passengersAndPay.ticketsChild,
		payChild: state.passengersAndPay.payChild,
		seats: state.orderTicketsSeats.departure.seats,
		paymentMethod: state.orderTicketsSeats.user.payment_method
	};
};

export default connect(mapStateToProps, null)(SectionCheckConfirmOrder);