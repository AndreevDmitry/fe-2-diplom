import React from 'react';
import progressStateSelect from '../../../images/progress_state_select.png';
import progressStateSelected from '../../../images/progress_state_selected.png';
import ProgressLineCost from "../../shared/ProgressLineCost";
import SideBarPassangersSection from '../../shared/SideBarPassangersSection';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserDataAC } from '../../../redux/action';
import { Checkbox } from 'pretty-checkbox-react';
 
import 'pretty-checkbox';

class PaySectionSearch extends React.Component {

	state = {
		first_name: this.props.first_name,
		last_name: this.props.last_name,
		patronymic: this.props.patronymic,
		phone: "",
		email: "",
		payment_method: ""
	}

	setFirstName = (e) => this.setState({ first_name: e.currentTarget.value });

	setLastName = (e) => this.setState({ last_name: e.currentTarget.value });

	setPatronymic = (e) => this.setState({ patronymic: e.currentTarget.value });

	setPhone = (e) => this.setState({ phone: e.currentTarget.value });

	setEmail = (e) => this.setState({ email: e.currentTarget.value });

	setPaymentOnline = (e) => this.setState({ payment_method: e.currentTarget.checked ? "online" : "" });

	setPaymentOffline = (e) => this.setState({ payment_method: e.currentTarget.checked ? "cash" : "" });

	setDataPayment = () => {
		this.props.setUserData(this.state);
		this.props.history.push("/check_confirm_order");
	};

	disabledButton = this.state.phone === "" && this.state.email === "" && this.state.payment_method === "";

	render() {
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
											value={this.state.last_name}
											onChange={this.setLastName} />
									</div>
									<div className="col-lg-4 pt-3 pl-4 pr-4">
										<p>Имя</p>
											<input 
											className="col-sm form-control" 
											type="text" 
											value={this.state.first_name}
											onChange={this.setFirstName} />
									</div>
									<div className="col-lg-4 pt-3 pl-4 pr-4">
										<p>Отчество</p>
											<input 
											className="col-sm form-control" 
											type="text" 
											value={this.state.patronymic}
											onChange={this.setPatronymic} />
									</div>
								</div>
								<div className="col-lg-6 pt-3 pl-4 pr-4">
									<p>Контактный телефон</p>
										<input 
										className="col-sm form-control" 
										type="text" 
										placeholder="+7 ___ ___ __ __"
										onChange={this.setPhone} />
								</div>
								<div className="col-lg-6 pt-3 pb-4 pl-4 pr-4">
									<p>E-mail</p>
										<input 
										className="col-sm form-control" 
										type="text" 
										placeholder="inbox@gmail.ru"
										onChange={this.setEmail} />
								</div>

								<div className="passengers-form-number border-top border-bottom row pt-4 pb-4">
									<h5 className="ml-5">Способ оплаты</h5>
								</div>

								<div className="row pl-5 mt-4">
									<div className="form-group">
										<Checkbox
										animation="tada" shape="curve" color="warning" icon={<i className="mdi mdi-check" />} 
										type="checkbox" 
										onChange={this.setPaymentOnline} 
										checked={this.state.payment_method !== "cash" && this.state.payment_method === "online"} />
									</div>
									<p className="ml-2 text-black-50">Онлайн</p>
								</div>
								<ul className="col-lg-7 flex-wrap list-group list-group-horizontal justify-content-between ml-3">
									<li className="col-lg-4 list-group-item border-0 font-weight-bold">Банковской картой</li>
									<li className="list-group-item border-0 font-weight-bold">PayPal</li>
									<li className="list-group-item border-0 font-weight-bold">Visa QIWI Wallet</li>
								</ul>
								<div className="row p-5 border-top">
									<div className="form-group">
										<Checkbox
										animation="tada" shape="curve" color="warning" icon={<i className="mdi mdi-check" />} 
										type="checkbox" 
										onChange={this.setPaymentOffline}
										checked={this.state.payment_method !== "online" && this.state.payment_method === "cash"}/>
									</div>
									<p className="ml-2 text-black-50">Наличными</p>
								</div>
							</form>
							<div className="d-flex justify-content-end mt-5">
								<button 
								className="btn btn-warning text-white font-weight-bold pl-5 pr-5 mt-5 mb-3"  
								type="button"
								disabled={this.state.phone === "" || this.state.email === "" || this.state.payment_method === ""}
								onClick={this.setDataPayment}
								>купить билеты</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
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