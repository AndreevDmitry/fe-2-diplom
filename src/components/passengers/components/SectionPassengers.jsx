import React from 'react';
import progressStateSelect from '../../../images/progress_state_select.png';
import progressStateSelected from '../../../images/progress_state_selected.png';
import progressStateDefault from '../../../images/progress_state_default.png';
import iconPlusSmallYellow from '../../../images/icon_plus_small_yellow.png';
import ProgressLineCost from "../../shared/ProgressLineCost";
import SideBarPassangersSection from '../../shared/SideBarPassangersSection';
import PassengerForm from './PassengerForm';

import { NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { setPersonInfoAC } from '../../../redux/action';


class SectionPassengers extends React.Component {

	state = {
		disableForm: true,
		activeButton: true,
		personInfo: {}
	};

	setDisableForm = () => this.setState({ disableForm: true });

	setActiveButton = () => this.setState({ activeButton: false, disableForm: false });

	setPersonInfo = (data, number) => {
		this.setState({ personInfo: data });
		this.props.setPersonInfo(data, number);
	};

	setPersonData = () => {
		this.props.history.push("/pay_selection");
		this.props.setPersonInfo(this.state.personInfo);
	};


	render() {

		const passengersFormJSX = this.props.seatsNumbers.map((el, i) => {
			return <PassengerForm
				key={el}
				passengerNumber={i + 1}
				setPersonInfo={this.setPersonInfo}
				setActiveButton={this.setActiveButton}
				activeForm={i === 0}
				disableForm={this.state.disableForm}
				setDisableForm={this.setDisableForm} />
		});

		return (
			<div>
				<ProgressLineCost tickets={progressStateSelected}
					passengers={progressStateSelect}
					passengersClass="completed"
					payment={progressStateDefault}
					paymentClass=""
					checkClass="" />

				<div className="container d-flex flex-wrap">
					<SideBarPassangersSection />

					<div className="col mb-5">

						{passengersFormJSX}

						{/* <div className="passengers-form-filling-box mt-5 mb-5 ml-5">
							<div className="passengers-form-filling col">
								<div className="passengers-form-number row border-bottom pt-4 pb-4">
									<img className="pl-4" src={iconMinusSircle} alt="..." />
									<h5 className="ml-3">Пассажир 2</h5>
									<img className="ml-auto mr-5 mt-auto" src={iconCloseX} alt="..." />
								</div>
								<select className="form-control w-25 ml-4 mt-4">
									<option>Десткий</option>
									<option>Взрослый</option>
								</select>
								<div className="d-flex">
									<form className="form pt-3 pl-4 pr-4 w-100" action="input">
										<p>Фамилия</p>
										<div className="form-group">
											<input className="col-sm form-control" type="text" placeholder="Мартынюк" />
										</div>
									</form>
									<form className="form pt-3 pl-4 pr-4 w-100" action="input">
										<p>Имя</p>
										<div className="form-group">
											<input className="col-sm form-control" type="text" placeholder="Ирина" />
										</div>
									</form>
									<form className="form pt-3 pl-4 pr-4 w-100" action="input">
										<p>Отчество</p>
										<div className="form-group">
											<input className="col-sm form-control" type="text" placeholder="Эдуардовна" />
										</div>
									</form>
								</div>
								<div className="d-flex">
									<form className="form pt-3 pl-4 pr-4 w-25" action="input">
										<p>Пол</p>
										<label className="switch">
											<input type="checkbox" />
											<span className="slider"></span>
										</label>
									</form>
									<form className="form pt-3 pl-4 pr-4 w-25" action="input">
										<p>Дата рождения</p>
										<div className="form-group">
											<input className="col-sm form-control" type="text" placeholder="дд/мм/гг" />
										</div>
									</form>
								</div>
								<div className="row border-bottom">
									<div className="form-group ml-5">
										<input type="checkbox" />
									</div>
									<p className="ml-2">ограниченная подвижность</p>
								</div>
								<div className="d-flex">
									<form className="form pt-3 pl-4 pr-4 w-50" action="input">
										<p>Тип докумета</p>
										<select className="form-control">
											<option>Свидетельство о рождении</option>
											<option>Паспорт РФ</option>
										</select>
									</form>
									<form className="form pt-3 pl-4 pr-4 w-25" action="input">
										<p>Номер</p>
										<div className="form-group">
											<input className="form-control" type="text" placeholder="12 символов _ _ _ _" />
										</div>
									</form>
								</div>
								<div className="form-passport-danger row mt-4">
									<img className="pl-4 align-self-center" src={iconCloseXSircle} alt="..." />
									<div className="col align-self-center mb-n3 pt-3">Номер свидетельства о рожденни указан некорректно <div className="d-flex">Пример:<p className="font-weight-bold pl-1">VIII-ЫП-123456</p></div></div>
								</div>
							</div>
						</div> */}

						{/* <div className="passengers-form-filling-box mt-5 mb-5 ml-5">
							<div className="passengers-form-filling col">
								<div className="passengers-form-number row border-bottom pt-4 pb-4">
									<img className="pl-4" src={iconMinusSircle} alt="..." />
									<h5 className="ml-3">Пассажир 2</h5>
									<img className="ml-auto mr-5 mt-auto" src={iconCloseX} alt="..." />
								</div>
								<select className="form-control w-25 ml-4 mt-4">
									<option>Десткий</option>
									<option>Взрослый</option>
								</select>
								<div className="d-flex">
									<form className="form pt-3 pl-4 pr-4 w-100" action="input">
										<p>Фамилия</p>
										<div className="form-group">
											<input className="col-sm form-control" type="text" placeholder="Мартынюк" />
										</div>
									</form>
									<form className="form pt-3 pl-4 pr-4 w-100" action="input">
										<p>Имя</p>
										<div className="form-group">
											<input className="col-sm form-control" type="text" placeholder="Ирина" />
										</div>
									</form>
									<form className="form pt-3 pl-4 pr-4 w-100" action="input">
										<p>Отчество</p>
										<div className="form-group">
											<input className="col-sm form-control" type="text" placeholder="Эдуардовна" />
										</div>
									</form>
								</div>
								<div className="d-flex">
									<form className="form pt-3 pl-4 pr-4 w-25" action="input">
										<p>Пол</p>
										<label className="switch">
											<input type="checkbox" />
											<span className="slider"></span>
										</label>
									</form>
									<form className="form pt-3 pl-4 pr-4 w-25" action="input">
										<p>Дата рождения</p>
										<div className="form-group">
											<input className="col-sm form-control" type="text" placeholder="дд/мм/гг" />
										</div>
									</form>
								</div>
								<div className="row  border-bottom">
									<div className="form-group ml-5">
										<input type="checkbox" />
									</div>
									<p className="ml-2">ограниченная подвижность</p>
								</div>
								<div className="d-flex">
									<form className="form pt-3 pl-4 pr-4 w-50" action="input">
										<p>Тип докумета</p>
										<select className="form-control">
											<option>Свидетельство о рождении</option>
											<option>Паспорт РФ</option>
										</select>
									</form>
									<form className="form pt-3 pl-4 pr-4 w-25" action="input">
										<p>Номер</p>
										<div className="form-group">
											<input className="form-control" type="text" placeholder="12 символов _ _ _ _" />
										</div>
									</form>
								</div>
								<div className="form-passport-ready row mt-4">
									<img className="pl-4 align-self-center" src={iconDawSircle} alt="..." />
									<p className="col align-self-center text-light mt-3">Готово</p>
									<div className="d-flex justify-content-end mt-4">
										<button type="button" className="btn btn-outline-dark m-3 mt-n2 pl-3 pr-3 font-weight-bold">Следующий пасссажир</button>
									</div>
								</div>
							</div>
						</div> */}

						{/* <div className="passengers-form-filling-box mt-5 mb-5 ml-5">
							<div className="passengers-form-filling col">
								<div className="passengers-form-number row pt-4 pb-4">
									<img className="pl-4" src={iconPlusSircle} alt="..." />
									<h5 className="ml-3">Пассажир 3</h5>
								</div>
							</div>
						</div> */}

						<NavLink className="box-add-passenger mt-5 mb-5" to="/seat_selection">
							<div className="passengers-form-filling col">
								<div className="passengers-form-number row pt-4 pb-4">
									<h5 className="ml-3 mt-1">Добавить пассажира</h5>
									<img className="ml-auto mr-5 mt-auto" src={iconPlusSmallYellow} alt="..." />
								</div>
							</div>
						</NavLink>

						<div className="d-flex justify-content-end">
							<button
								className="btn btn-warning text-white font-weight-bold pl-5 pr-5 mt-5 mb-5"
								type="button"
								onClick={this.setPersonData}
								disabled={this.state.activeButton}>Далее</button>
						</div>
					</div>

				</div>
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		seatsNumbers: state.passengersAndPay.seatsNumbers
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setPersonInfo: (data, number) => dispatch(setPersonInfoAC(data, number))
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SectionPassengers));