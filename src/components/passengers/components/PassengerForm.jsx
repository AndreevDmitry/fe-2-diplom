import React, { useState } from 'react';
import iconMinusSircle from '../../../images/icon_minus_sircle.png';
import iconCloseX from '../../../images/icon_close_x.png';
import iconCloseXCircle from '../../../images/icon_close_x_sircle.png'
import iconPlusSircle from '../../../images/icon_plus_sircle.png';

import { useForm } from 'react-hook-form';

const FormValidationErrors = (props) => {
	const errors = props.errors;
	if (Object.keys(errors).length === 0) {    return null;  }
	console.log(errors)
	return (
		<>
			<div className="border-bottom row pt-4 pb-4 passenger-form-validate-error-block">
			<img className="passengers-form-img pl-4 mt-auto" src={iconCloseXCircle} alt="..."
		/>

		<h5 className="ml-3"> 
		    {errors.last_name && errors.last_name.type === "required" && <span>Укажите фамилию<br></br></span>}
			{errors.first_name && errors.first_name.type === "required" && <span>Укажите имя<br></br></span>}
			{errors.patronymic && errors.patronymic.type === "required" && <span>Укажите отчество<br></br></span>}
			{errors.birthday && errors.birthday.type === "required" && <span>Укажите дату рождения<br></br></span>}
			{errors.serial && errors.serial.type === "required" && <span>Укажите серию паспота<br></br></span>}
			{errors.number && errors.number.type === "required" && <span>Укажите номер паспота<br></br></span>}
			{errors.document_data && errors.document_data.type === "required" && <span>Укажите номер свидетельства о рождении<br></br></span>}
		
		
		
		</h5>
		</div>
</>
	)
}

const Form = (props) => {

	const { register, handleSubmit, formState: { errors }} = useForm();

	const onSubmit = (data, e) => {
		let newData = { ...data };

		if (data.document_type === "Паспорт") {
			newData = {
				...data,
				document_data: data.serial + ' ' + data.number
			}
			delete newData.serial
			delete newData.number
		}

		props.setData(newData, props.passengerNumber);
		props.setActiveButton();
	};

	const onError = (errors, e) => {
		console.log(errors);
	};

	const documents = (value) => {
		if (value === "Паспорт") {
			props.setDocumentTrue();
		} else {
			props.setDocumentFalse();
		}
	};

	return (
		<>
			{props.active ?
				<form  onSubmit={handleSubmit(onSubmit, onError)} className="passengers-form-filling col mt-5 mb-5">
					<div className="passengers-form-number border-bottom row pt-4 pb-4">
						<img className="passengers-form-img pl-4 mt-auto" src={iconMinusSircle} alt="..."
							onClick={props.setActiveFalse} />
						<h5 className="ml-3">Пассажир {props.passengerNumber}</h5>
						<img className="ml-auto mr-5 mt-auto" src={iconCloseX} alt="..." />
					</div>

					<div className="col-lg-4 pl-4 pt-4 pr-4">
						<select className="form-control" {...register('is_adult', {required: true})}>
							<option value={true}>Взрослый</option>
							<option value={false}>Десткий</option>
						</select>
					</div>
					<div className="d-flex flex-wrap">
						<div className="col-lg-4 pt-3 pl-4 pr-4 w-100">
							<p>Фамилия</p>
							<input
								className="col-sm form-control"
								type="text"
								placeholder="Мартынюк"
								{...register('last_name', {required: true, maxLength: 30 })}
							/>
							{errors.last_name && errors.last_name.type === "maxLength" && <span>*длина превышена</span>}
						</div>
						<div className="col-lg-4 pt-3 pl-4 pr-4 w-100">
							<p>Имя</p>
							<input
								className="col-sm form-control"
								type="text"
								placeholder="Ирина"
								{...register('first_name', {required: true, maxLength: 30})}
							/>
							{errors.first_name && errors.first_name.type === "maxLength" && <span>*длина превышена</span>}
						</div>
						<div className="col-lg-4 pt-3 pl-4 pr-4 w-100">
							<p>Отчество</p>
							<input
								className="col-sm form-control"
								type="text"
								placeholder="Эдуардовна"
								{...register('patronymic', {required: true, maxLength: 30})}	
							/>
							{errors.patronymic && errors.patronymic.type === "maxLength" && <span>*длина превышена</span>}
						</div>
					</div>
					<div className="d-flex flex-wrap">
						<div className="col-lg-2 pt-3 pl-4 pr-4 mr-5">
							<p>Пол</p>
							<label className="switch">
								<input type="checkbox" {...register('gender')} />
								<span className="slider-checkbox">&nbsp; М &nbsp; &nbsp; &nbsp; Ж</span>
							</label>
						</div>
						<div className="col-lg-4 pt-3 pl-4 pr-4">
							<p>Дата рождения</p>
							<input
								className="col-sm form-control"
								type="text"
								placeholder="дд/мм/гг"
								{...register('birthday', {required: true, maxLength: 30})}
							 />
							{errors.birthday && errors.birthday.type === "maxLength" && <span>*длина превышена</span>}
						</div>
					</div>
					<div className="row border-bottom">
						<input className="ml-5" type="checkbox" />
						<p className="ml-3 mt-3">ограниченная подвижность</p>
					</div>
					<div className="d-flex flex-wrap">
						<div className="col-lg-4 ml-2 pt-3 pr-4">
							<p>Тип докумета</p>
							<select
								className="form-control"
								name="document_type"
								{...register('document_type', {required: true})}
								onChange={e => documents(e.currentTarget.value)}>
								<option value="Паспорт">Паспорт РФ</option>
								<option value="Свидетельство">Свидетельство о рождении</option>
							</select>
						</div>
						{props.documents ?
							<>
								<div className="col-lg-3 pt-3 pl-4 pr-4">
									<p>Серия</p>
									<input
										className="col-sm form-control"
										type="text"
										placeholder="_ _ _ _"
										{...register('serial', {required: true, maxLength: 4})}
									/>
									{errors.serial && errors.serial.type === "maxLength" && <span>*длина превышена</span>}
								</div>
								<div className="col-lg-3 pt-3 pl-4 pb-4">
									<p>Номер</p>
									<input className="col-sm form-control"
										type="text"
										placeholder="_ _ _ _ _ _"
										{...register('number', {required: true, maxLength: 6})}
									/>
									{errors.number && errors.number.type === "maxLength" && <span>*длина превышена</span>}
								</div>
							</>
							:
							<div className="col-lg-4 pt-3 pl-4 pb-4">
								<p>Номер</p>
								<input
									className="col-sm form-control"
									type="text"
									placeholder="_ _ _  _ _  _ _ _ _ _"
									{...register('document_data', {required: true, maxLength: 10})}
								/>
								{errors.document_data && errors.document_data.type === "maxLength" && <span>*длина превышена</span>}
							</div>}
					</div>
					<div className="row border-bottom"></div>

					<FormValidationErrors errors={errors}/>

					<div className="row justify-content-end">
						<button
							type="submit"
							className="btn btn-outline-dark m-3 pl-3 pr-3 font-weight-bold"
						>Следующий пасссажир</button>
					</div>
				</form>
				:
				<div className="passengers-form-filling mt-5 mb-5">
					<button
						className="passengers-form-button d-flex pt-4 pb-4"
						onClick={props.setActiveTrue}
						disabled={props.disableForm}>
						<img className="passengers-form-img pl-4 mt-auto" src={iconPlusSircle} alt="..." />
						<h5 className="ml-3 pt-1">Пассажир {props.passengerNumber}</h5>
					</button>
				</div>
			}
		</>
	);
};

function PassengerForm(props) {
	const [active, setActive] = useState(props.activeForm);
	const [documents, setDocuments] = useState(true);

	const handleActiveInput = (active) => setActive(active);

	const handleDocumentsInput = (documents) => setDocuments(documents);

	const setActiveTrue = () => {
		setActive(true);
		props.setDisableForm();
	};

	const setActiveFalse = () => setActive(false);

	const setDocumentTrue = () => setDocuments(true);

	const setDocumentFalse = () => setDocuments(false);

	const setData = (data, number) => props.setPersonInfo(data, number);

	return (
		<Form
			disableForm={props.disableForm}
			passengerNumber={props.passengerNumber}
			setActiveButton={props.setActiveButton}
			setData={setData}
			active={handleActiveInput}
			documents={handleDocumentsInput}
			setActiveTrue={setActiveTrue}
			setActiveFalse={setActiveFalse}
			setDocumentTrue={setDocumentTrue}
			setDocumentFalse={setDocumentFalse} />
	);
}

export default PassengerForm;