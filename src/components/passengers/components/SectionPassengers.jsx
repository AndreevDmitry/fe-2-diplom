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