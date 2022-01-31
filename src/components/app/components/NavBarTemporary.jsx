import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBarTemporary = () => {
  return (
    <header>
      <div className="nav-bar-temporary">
        <div className="container">
          <nav className="nav d-flex flex-wrap">
            <NavLink className="itemTemporary" to="/">главная</NavLink>
            <NavLink className="itemTemporary" to="/search_tickets">поиск билетов</NavLink>
            <NavLink className="itemTemporary" to="/seat_selection">выбор мест</NavLink>
            <NavLink className="itemTemporary" to="/passengers">пассажиры</NavLink>
            <NavLink className="itemTemporary" to="/pay_selection">выбор оплаты</NavLink>
            <NavLink className="itemTemporary" to="/check_confirm_order">подтверждение заказа</NavLink>
            <NavLink className="itemTemporary" to="/order_confirmed">подтверждён</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBarTemporary;