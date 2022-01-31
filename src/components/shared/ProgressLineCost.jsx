import React from 'react';


const ProgressLineCost = (props) => {
  return (
    <div className="progress-line-cost">
      <ul className="d-flex list-group list-group-horizontal justify-content-between">
        <li
          className="progress-line-cost-button completed list-group-item w-25 d-flex font-weight-bold border-0">
          <p className="progress-line-cost-number ml-auto">1</p>
          <p className="progress-line-cost-text">Билеты</p>
          <img className="ml-auto" src={props.tickets} alt="..."/>
        </li>
        <li
          className={`progress-line-cost-button ${props.passengersClass} list-group-item w-25 justify-content-center d-flex font-weight-bold border-0`}>
          <p className="progress-line-cost-number ml-auto">2</p>
          <p className="progress-line-cost-text">Пассажиры</p>
          <img className="ml-auto" src={props.passengers} alt="..."/>
        </li>
        <li
          className={`progress-line-cost-button ${props.paymentClass} list-group-item w-25 justify-content-center d-flex font-weight-bold border-0`}>
          <p className="progress-line-cost-number ml-auto">3</p>
          <p className="progress-line-cost-text">Оплата</p>
          <img className="ml-auto" src={props.payment} alt="..."/>
        </li>
        <li
          className={`progress-line-cost-button ${props.checkClass} list-group-item w-25 justify-content-center d-flex font-weight-bold border-0`}>
          <p className="progress-line-cost-number">4</p>
          <p className="progress-line-cost-text ">Проверка</p>
        </li>
      </ul>
    </div>
  );
};

export default ProgressLineCost;