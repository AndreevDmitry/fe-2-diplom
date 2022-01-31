import React from 'react';
import iconPassangerSircle from '../../../images/icon_passanger_sircle.png';


const PassengerJSX = (props) => {

	const isAdult = props.personInfo.is_adult === "true" ? "Взрослый" : "Детский";

	const gender = !props.personInfo.gender ? "мужской" : "женский";

	const documentType = props.personInfo.document_type === "Паспорт" ? "Паспорт РФ" : "Свидетельство о рождении";

	return (
		<div className="row pl-4 pt-3 border-bottom border-right">
			<div className="col-lg-2">
				<img src={iconPassangerSircle} alt="..." />
				<h6 className="mt-3">{isAdult}</h6>
			</div>
			<div className="col ml-3">
				<h6>{props.personInfo.last_name} {props.personInfo.first_name} {props.personInfo.patronymic}</h6>
				<p className="text-black-50 mt-3">Пол {gender}</p>
				<p className="text-black-50 mt-4">Дата рождения {props.personInfo.birthday}</p>
				<p className="text-black-50 mt-4">{documentType} {props.personInfo.document_data}</p>
			</div>
		</div>
	);
}

export default PassengerJSX;