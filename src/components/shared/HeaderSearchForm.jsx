import React, {useEffect, useState} from 'react';

import { connect } from 'react-redux';
import { setDataFormAC } from '../../redux/action';
import { Typeahead } from 'react-bootstrap-typeahead';
import { searchMainAPI } from '../../redux/searchMain-reducer';
import { withRouter } from 'react-router';
import { filterTicketsAndSeatsReducerTC } from '../../redux/filterTicketsAndSeats-reducer';

function HeaderSearchForm(props) {
    const [dataCities, setDataCities] = useState([]);
	const [valueFromCity, setValueFromCity] = useState(props.form.whereFromCity);
	const [valueToCity, setValueToCity] = useState(props.form.whereToCity);
	const [whereFromCity, setWhereFromCity] = useState(props.form.whereFromCity);
	const [whereFromDate, setWhereFromDate] = useState(props.form.whereFromDate);
	const [whereToCity, setWhereToCity] = useState(props.form.whereToCity);
	const [whereToDate, setWhereToDate] = useState(props.form.whereToDate);
	const [cityWhereFromId, setCityWhereFromId] = useState(props.form.cityWhereFromId);
	const [cityWhereToId, setCityWhereToId] = useState(props.form.cityWhereToId);


	useEffect(() => {
		props.searchRoutes(valueFromCity).then(data => {
			data.data.error ? setDataCities([]) : setDataCities(data.data)
		});		
	}, [valueFromCity]);

	useEffect(() => {
		props.searchRoutes(valueToCity).then(data => {
			data.data.error ? setDataCities([]) : setDataCities(data.data)
		});		
	}, [valueToCity]);	

	const handleValueFromCityInput = (value) => {
    	setValueFromCity(value);
	};

	const handleValueToCityInput = (value) => {
		setValueToCity(value);
	};

	const handleWhereFromCityInput = (values) => {
		if (values.length !== 0) {
			const city = dataCities.find(el => el.name === values[0]);
			setWhereFromCity(city.name);
			setCityWhereFromId(city._id);
		}
	};

	const handleWhereToCityInput = (values) => {
		if (values.length !== 0) {
			const city = dataCities.find(el => el.name === values[0]);
			setWhereToCity(city.name);
			setCityWhereToId(city._id);
		}
	};

	const handleWhereFromDateInput = (event) => {
		setWhereFromDate(event.target.value);
	};

	const hanldeWhereToDateInput = (event) => {
		setWhereToDate(event.target.value);
	};

	const saveMainState = () => {
		const setForm = { whereFromCity, whereToCity, whereFromDate, whereToDate, cityWhereFromId, cityWhereToId };
		props.setDataForm(setForm);
		window.scrollTo(0, 700);
		props.setSeatsAndTicketsEvent('actualPage', props.match.url);
		props.history.push('/search_tickets');
	};

	const disabledButton = () => (
		whereFromCity === '' ||
		whereToCity === '' ||
		whereFromDate === '' ||
		whereToDate === '' ||
		cityWhereFromId === '' ||
		cityWhereToId === ''
	);


	const options = dataCities.map(el => el.name);

	return (
		<div className="header-section-three-page">
			<div className="text-white animated zoomInDown">
				<div className="container section-header-order pb-3">
					<div className="d-flex">
						<form className="form mt-3 w-100" action="input">
							<p className="ml-3">Направление</p>
							<div className="d-flex flex-wrap form-group">
								<Typeahead value={valueFromCity}
									placeholder={valueFromCity ? valueFromCity : "откуда"}
									id="whereFromCity"
									options={options}
									onInputChange={handleValueFromCityInput}
									onChange={handleWhereFromCityInput}
									className="flex-grow-1 m-2"
								/>
								<i className="glyphicon glyphicon-user" />
								<Typeahead value={valueToCity}
									placeholder={valueToCity ? valueToCity : "куда"}
									id="whereToCity"
									options={options}
									onInputChange={handleValueToCityInput}
									onChange={handleWhereToCityInput}
									className="flex-grow-1 m-2"
								/>
							</div>
						</form>
						<form className="form mt-3 w-100" action="input">
							<p className="ml-3">Дата</p>
							<div className="d-flex flex-wrap form-group">
								<input className="col form-control m-2"
									key="dateFrom"
									type="date"
									onChange={handleWhereFromDateInput}
									value={whereFromDate}
								/>
								<input className="col form-control m-2"
									key="dateTo"
									type="date"
									onChange={hanldeWhereToDateInput}
									value={whereToDate}
								/>
							</div>
						</form>
					</div>
					<div className="text-right">
						<button
							className="btn btn-outline-warning col-lg-3 m-1"
							type="button"
							disabled={disabledButton()}
							onClick={saveMainState}>найти билеты</button>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		form: state.sectionSearch.form
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		searchRoutes: (value) => searchMainAPI(value),
		setDataForm: (form) => {
			const action = setDataFormAC(form);
			dispatch(action);
		},
		setSeatsAndTicketsEvent: (fieldName, fieldValue) => dispatch(filterTicketsAndSeatsReducerTC(fieldName, fieldValue))
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderSearchForm));