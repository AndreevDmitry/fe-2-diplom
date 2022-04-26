import React, { useState } from 'react';
import progressStateSelect from '../../../images/progress_state_select.png';
import progressStateSelected from '../../../images/progress_state_selected.png';
import ProgressLineCost from "../../shared/ProgressLineCost";
import SideBarPassangersSection from '../../shared/SideBarPassangersSection';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserDataAC } from '../../../redux/action';
import { Checkbox } from 'pretty-checkbox-react';
 
import 'pretty-checkbox';

function PaySectionSearch(props) {
	const [first_name, setFirstName] = useState(props.first_name);
	const [last_name, setLastName] = useState(props.last_name);
	const [patronymic, setPatronymic] = useState(props.patronymic);
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [payment_method, setPayment] = useState('');
	
	const handleFirstNameInput = (e) => {
		setFirstName(e.currentTarget.value)
	};

	const handleLastNameInput = (e) => {
		setLastName(e.currentTarget.value)
	};

	const handlePatronymicInput = (e) => {
		setPatronymic(e.currentTarget.value)
	};

	const handlePhoneInput = (e) => {
		setPhone(e.currentTarget.value)
	};

	const handleEmailInput = (e) => {
		setEmail(e.currentTarget.value)
	};

	const handlePaymentInputOnline = (e) => {
		if (e.currentTarget.checked) setPayment("online")
		else setPayment("")
	};
	
	const handlePaymentInputOffline = (e) => {
		if (e.currentTarget.checked) setPayment("cash")
		else setPayment("")
	};

	const setDataPayment = () => {
		props.setUserData({first_name, last_name, patronymic, phone, email, payment_method});
		props.history.push("/check_confirm_order");
	};

	return (
		<div>
			<ProgressLineCost tickets={progressStateSelected}
				passengers={progressStateSelected}
				passengersClass="completed"
				payment={progressStateSelect}
				paymentClass="completed"
				checkClass="" />

			<div className="container d-flex flex-wrap">
				<SideBarPassangersSection />

				<div className="col mb-5">
					<div className="passengers-form-filling-box mt-5 mb-5">
						<form className="passengers-form-filling col">
							<div className="passengers-form-number border-bottom row pt-4 pb-4">
								<h5 className="ml-5">Персональные данные</h5>
							</div>

							<div className="d-flex flex-wrap">
								<div className="col-lg-4 pt-3 pl-4 pr-4">
									<p>Фамилия</p>
										<input 
										className="col-sm form-control" 
										type="text" 
										value={last_name}
										onChange={handleLastNameInput} />
								</div>
								<div className="col-lg-4 pt-3 pl-4 pr-4">
									<p>Имя</p>
										<input 
										className="col-sm form-control" 
										type="text" 
										value={first_name}
										onChange={handleFirstNameInput} />
								</div>
								<div className="col-lg-4 pt-3 pl-4 pr-4">
									<p>Отчество</p>
										<input 
										className="col-sm form-control" 
										type="text" 
										value={patronymic}
										onChange={handlePatronymicInput} />
								</div>
							</div>
							<div className="col-lg-6 pt-3 pl-4 pr-4">
								<p>Контактный телефон</p>
									<input 
									className="col-sm form-control" 
									type="text" 
									placeholder="+7 ___ ___ __ __"
									value={phone}
									onChange={handlePhoneInput} />
							</div>
							<div className="col-lg-6 pt-3 pb-4 pl-4 pr-4">
								<p>E-mail</p>
									<input 
									className="col-sm form-control" 
									type="text" 
									placeholder="inbox@gmail.ru"
									value={email}
									onChange={handleEmailInput} />
							</div>

							<div className="passengers-form-number border-top border-bottom row pt-4 pb-4">
								<h5 className="ml-5">Способ оплаты</h5>
							</div>

							<div className="row pl-5 mt-4">
								<div className="form-group">
									<Checkbox
									animation="tada" shape="curve" color="warning" icon={<i className="mdi mdi-check" />} 
									type="checkbox" 
									onChange={handlePaymentInputOnline} 
									checked={payment_method === "online"} />
								</div>
								<p className="ml-2 text-black-50">Онлайн</p>
							</div>
							<ul className="flex-wrap list-group list-group-horizontal justify-content-between ml-3">
								<li className="col-lg-4 list-group-item border-0 font-weight-bold">Банковской картой</li>
								<li className="list-group-item border-0 font-weight-bold">PayPal</li>
								<li className="list-group-item border-0 font-weight-bold">Visa QIWI Wallet</li>
							</ul>
							<div className="row p-5 border-top">
								<div className="form-group">
									<Checkbox
									animation="tada" shape="curve" color="warning" icon={<i className="mdi mdi-check" />} 
									type="checkbox" 
									onChange={handlePaymentInputOffline}
									checked={payment_method === "cash"}/>
								</div>
								<p className="ml-2 text-black-50">Наличными</p>
							</div>
						</form>
						<div className="d-flex justify-content-end mt-5">
							<button 
							className="btn btn-warning text-white font-weight-bold pl-5 pr-5 mt-5 mb-3"  
							type="button"
							disabled={phone === "" || email === "" || payment_method === ""}
							onClick={setDataPayment}
							>купить билеты</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		first_name: state.orderTicketsSeats.departure.seats[0].person_info.first_name,
		last_name: state.orderTicketsSeats.departure.seats[0].person_info.last_name,
		patronymic: state.orderTicketsSeats.departure.seats[0].person_info.patronymic
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setUserData: (data) => dispatch(setUserDataAC(data))
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PaySectionSearch));