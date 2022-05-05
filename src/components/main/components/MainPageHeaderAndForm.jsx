import React, { useEffect, useState, Fragment} from 'react';
import iconCachedWhite from '../../../images/icon_cached_white.png';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import { connect } from 'react-redux';
import { setDataFormAC } from '../../../redux/action';
import { Typeahead } from 'react-bootstrap-typeahead';
import { withRouter } from 'react-router-dom';
import { searchMainAPI } from '../../../redux/searchMain-reducer';

function MainPageHeaderAndForm(props) {
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

	useEffect(() => {
		props.searchRoutes('').then(data => {
			data.data.error ? setDataCities([]) : setDataCities(data.data)
		});		
	}, []);

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
		console.log(event.target.value);
		setWhereFromDate(event.target.value);
	};

	const hanldeWhereToDateInput = (event) => {
		console.log(event.target.value);
		setWhereToDate(event.target.value);
	};

	const saveMainState = () => {
		const setForm = { whereFromCity, whereToCity, whereFromDate, whereToDate, cityWhereFromId, cityWhereToId };		
		props.setDataForm(setForm);
		props.history.push('/search_tickets');
	};

	console.log({dataCities})

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
		<div className="header-section">
			<div className="container section-header text-white">
				<div className="row">
					<div className="section-header-text col-lg-6 pl-5 animated zoomInDown">
						<h1 className="display-4">Вся жизнь -</h1>
						<h1 className="display-4 font-weight-bold">путешествие!</h1>
					</div>
					<div className="section-header-form col-lg-6 animated zoomInDown">
						<div className="row mt-5">
							<form className="form mt-5 w-100">
								<p className="ml-3">Направление</p>
								<div className="d-flex form-group m-3 justify-content-center">
									<Fragment>
										<Typeahead 
											value={whereFromCity}
											placeholder={dataCities.error ? dataCities.error : "откуда"}
											id="whereFromCity"
											options={options}
											onInputChange={handleValueFromCityInput}
											onChange={handleWhereFromCityInput}
											className="input-typeahead"
										/>
									</Fragment>
									<img className="mt-auto mb-2" src={iconCachedWhite} alt="..." />

									<Typeahead
										value={whereToCity}
										placeholder={dataCities.error ? dataCities.error : "куда"}
										id="whereToCity"
										options={options}
										onInputChange={handleValueToCityInput}
										onChange={handleWhereToCityInput}
										className="input-typeahead"
									/>
								</div>
							</form>
							<form className="form mt-5 w-100">
								<p className="ml-3">Дата</p>
								<div className="d-flex flex-wrap form-group m-3">
									<input className="col-sm form-control m-1"
										type="date"
										value={whereFromDate}
										onChange={handleWhereFromDateInput} />
										<div className="m-2"></div>
									<input className="col-sm form-control m-1"
										type="date"
										value={whereToDate}
										onChange={hanldeWhereToDateInput} />
								</div>
							</form>
						</div>
						<div className="text-right ml-4">
							<button 
								className="btn btn-warning mt-5 col-lg-6"
								type="button"
								disabled={disabledButton()}
								onClick={saveMainState}>найти билеты</button>
						</div>
					</div>
				</div>
			</div>
			<div className="header-bottom-line"></div>
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
		}
	}
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPageHeaderAndForm));