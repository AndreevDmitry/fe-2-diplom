import React from 'react';

import iconRuble from "../../images/icon_ruble.png";
import iconOrderTicketSend from "../../images/icon_order_ticket_send.png";
import iconOrderTicketPrint from "../../images/icon_order_ticket_print.png";
import iconOrderTicketPresent from "../../images/icon_order_ticket_present.png";
import iconRateService from "../../images/icon_rate_service.png";

import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { numSpc } from '../..';

const OrderConfirmed = (props) => {

	return (
		<div>
			<div className="header-section-final-page pb-5">
				<div className="container pb-5">
					<h1 className="row header-text-final-order">Благодарим Вас за заказ!</h1>
					<div className="row final-order-window">
						<div className="row pt-4 pb-4 w-100">
							<h5 className="col ml-5">№Заказа 285АА</h5>
							<div className="row mr-5">
								<h4 className="mr-3">сумма</h4>
								<h3 className="mr-3">{numSpc((props.ticketsAdult * props.payAdult) + (props.ticketsChild * props.payChild))}<img className="ml-2" src={iconRuble} alt="..." /></h3>
							</div>
						</div>
						<div className="container tickets-icons-window h-100">
							<div className="d-flex justify-content-center col-lg-12 animated fadeInRight">
								<div className="d-flex flex-wrap justify-content-between align-items-center col-lg-8 mt-4">
									<div className="col-lg-4">
										<div className="text-center">
											<img src={iconOrderTicketSend} alt="..." />
										</div>
										<p className=" text-center">билеты будут<br/>отправлены<br/>на ваш e-mail</p>
									</div>
									<div className="col-lg-4">
										<div className="text-center">
											<img src={iconOrderTicketPrint} alt="..." />
										</div>
										<p className=" text-center">распечатайте и сохраняйте билеты до даты поездки</p>
									</div>
									<div className="col-lg-4">
										<div className="text-center">
											<img src={iconOrderTicketPresent} alt="..." />
										</div>
										<p className=" text-center">предьявите распечатанные билеты при посадке</p>
									</div>
								</div>
							</div>
						</div>
						<div className="m-5">
							<h1 className="ml-5">{props.firstName} {props.patronymic}!</h1>
							<p className="ml-5 mt-4">Ваш заказ успешно оформлен.</p>
							<p className="ml-5 mt-n3">В ближайшее время с вами свяжется наш оператор для подтверждения.</p>
							<h5 className="m-5 font-weight-bold">Благодарим Вас за оказанное доверие и желаем приятного путешествия!</h5>
						</div>
						<div className="container rate-service-back-main-page justify-content-between p-5">
							<div className="row">
								<h4 className="align-self-center mt-1 mr-3">Оценить сервис</h4>
								<div className="d-flex">
									<img className="" src={iconRateService} alt="..." />
									<img className="" src={iconRateService} alt="..." />
									<img className="" src={iconRateService} alt="..." />
									<img className="" src={iconRateService} alt="..." />
									<img className="" src={iconRateService} alt="..." />
								</div>
								<div className="mt-2 ml-auto">
									<NavLink
										className="btn btn-sm btn-outline-dark font-weight-bold text-uppercase p1"
										to="/"
										type="button">вернуться на главную</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="final-order-window-white-block"></div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		ticketsAdult: state.passengersAndPay.ticketsAdult,
		payAdult: state.passengersAndPay.payAdult,
		ticketsChild: state.passengersAndPay.ticketsChild,
		payChild: state.passengersAndPay.payChild,
		firstName: state.orderTicketsSeats.user.first_name,
		patronymic: state.orderTicketsSeats.user.patronymic
	}
}

export default connect(mapStateToProps, null)(OrderConfirmed);