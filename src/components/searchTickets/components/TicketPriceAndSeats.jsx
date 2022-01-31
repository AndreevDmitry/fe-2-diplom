import React from 'react';
import iconRubleSmall from '../../../images/icon_ruble_small.png';

import { numSpc } from '../../..';

const TicketPriceAndSeats = (props) => {
  return (
    <div className="row mt-3">
      <p>{props.name}</p>
      <p className="quantity-places-orange ml-auto">{props.seats}</p>
      <p className="ml-1">от</p>
      <h5 className="mt-n2 ml-1">{numSpc(props.price)}</h5>
      <img className="mt-n1 pl-1 h-100" src={iconRubleSmall} alt="..."/>
    </div>
  );
};

export default TicketPriceAndSeats;