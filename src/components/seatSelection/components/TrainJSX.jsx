import React from 'react';
import iconRubleSmall from '../../../images/icon_ruble_small.png';
import iconRuble from '../../../images/icon_ruble.png';

import { OverlayTrigger } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';
import { numSpc } from '../../..';


const TrainJSX = (props) => {

	const seatsMath = Math.ceil(props.train.coach.available_seats / 2);

	const seatFirstRowJSX = props.train.seats.map(el => {
		let active = '';
		props.seatNumber.map(find => +find === el.index ? active = 'active' : '');

		return el.index <= 32 ?
			<button className={`seats-index ${el.available} ${active}`}
				key={el.index} disabled={el.available} onClick={props.setSeatNumber}>{el.index}</button> : ''
	});


	const seatTwoRowJSX = props.train.seats.map(el => {
		let active = '';
		props.seatNumber.map(find => +find === el.index ? active = 'active' : '');
		return el.index <= 32 ?
			'' :
			<button className={`seats-index two-row ${el.available} ${active}`}
				key={el.index} disabled={el.available} onClick={props.setSeatNumber}>{el.index}</button>
	});

	return (
		<div>
			<div className="number-of-vagon d-flex justify-content-between">
				<div className="d-flex">
					<p>Вагоны</p>
					<p className="font-weight-bold text-white ml-1">07</p>
					<p className="font-weight-bold ml-1">09</p>
				</div>
				<p>Нумерация вагонов начинается с головы поезда</p>
			</div>
			<div className="number-of-vagon-checked d-flex flex-wrap">
				<div className="number-of-vagon-checked-yellow">
					<p className="number-of-vagon-checked-yellow-number">07</p>
					<p className="number-of-vagon-checked-yellow-text">вагон</p>
				</div>
				<div className="col ml-5 mt-3">
					<p>места {props.train.coach.available_seats}</p>
					<p>Верхние {seatsMath}</p>
					<p>Нижние {seatsMath}</p>
				</div>
				<div className="col ml-5 mt-3">
					<p>Стоимость</p>
					<p>{numSpc(props.train.coach.top_price)}<img className="align-self-center ml-1" src={iconRubleSmall} alt="..." /></p>
					<p>{numSpc(props.train.coach.bottom_price)}<img className="align-self-center ml-1" src={iconRubleSmall} alt="..." /></p>
				</div>
				<div className="col-lg-4 justify-content-center w-100 mt-3">
					<p>Обслуживание ФПК</p>
					<div className="row justify-content-around w-75 mt-3 ml-1">
						<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">кондиционер</Tooltip>}>
							<div type="checkbox" className="col icon-vagon-conditioner"></div>
						</OverlayTrigger>
						<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">WI-FI</Tooltip>}>
							<div type="checkbox" className="col icon-vagon-wifi"></div>
						</OverlayTrigger>
						<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">белье</Tooltip>}>
							<div type="checkbox" className="col icon-vagon-linens"></div>
						</OverlayTrigger>
						<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">питание</Tooltip>}>
							<div type="checkbox" className="col icon-vagon-cup"></div>
						</OverlayTrigger>
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-end">
				<p className="number-of-people-online mr-4">11 человек выбирают места в этом поезде</p>
			</div>
			<div className="vagon-places-container mb-5">
				<img className="image-vagon-places" src={props.image} alt="..." />
				<div className={`train-${props.train.coach.class_type}-container`}>
					{seatFirstRowJSX}
				</div>
				<div className={`train-${props.train.coach.class_type}-container-two`}>
					{seatTwoRowJSX}
				</div>
			</div>
			{props.sumTicketsPay !== 0 &&
				<div className="row justify-content-end mr-3 mb-3">
					<p className="last-ticket-price ml-1">{numSpc(props.sumTicketsPay)}</p>
					<img className="icon-coupe ml-1" src={iconRuble} alt="иконка рубль" />
				</div>}
		</div>
	);
}

export default TrainJSX;