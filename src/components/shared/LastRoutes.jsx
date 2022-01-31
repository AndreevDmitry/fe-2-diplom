import React from 'react';
import iconRuble from '../../images/icon_ruble.png';
import iconWifiRocketCup from '../../images/icons_wifiRocketCup.png';

import { ucFL, numSpc } from '../..';


const LastRoutes = (props) => {

	return (
			<div className="last-ticket-result row ml-1 mt-2 p-2">
				<div className="d-flex justify-content-between w-100">
					<div className="">
						<p className="last-ticket-direction font-weight-bold">{ucFL(props.state.departure.from.city.name)}</p>
						<p className="last-ticket-station font-weight-light mt-n3">{props.state.departure.from.railway_station_name}</p>
					</div>
					<div className="text-right">
						<p className="last-ticket-direction font-weight-bold">{ucFL(props.state.departure.to.city.name)}</p>
						<p className="last-ticket-station font-weight-light mt-n3">{props.state.departure.to.railway_station_name}</p>
					</div>
				</div>
				<div className="row mt-2 w-100">
					<div className="col">
						<img className="icon-wifi-rocket-cup" src={iconWifiRocketCup} alt="иконки Wi-Fi рокета кружка" />
					</div>
					<div className="row ml-auto">
						<p>от</p>
						<p className="last-ticket-price ml-1">{numSpc(props.state.min_price)}</p>
						<img className="icon-coupe ml-1" src={iconRuble} alt="иконка рубль" />
					</div>
				</div>
			</div>
	);
};

export default LastRoutes;